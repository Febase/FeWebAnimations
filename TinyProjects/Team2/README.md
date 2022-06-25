
# Tiny Project. *Beautiful Text Stairs* (BTS)

BTS는 스크롤에 따라 특정 글자가 계단을 타고 올라오는 애니메이션 ([레퍼런스](https://www.fabulatorij.com/))을 구현하는 프로젝트입니다.
BTS는 Framer motion을 활용해 크게 두가지 이펙트를 통해 동작합니다.
1. 스크롤에 대응하는 텍스트 계단
2. 마우스 hover 트리거에 대응하는 텍스트 데코레이션

아래의 기술을 주로 이용해 BTS 효과를 구현했습니다.
- React (typescript)
- styled-component
- framer-motion
  - `useViewportScroll`

결과물은 아래 동영상 또는 [데모 웹사이트](https://mellifluous-gnome-d255e2.netlify.app/)를 통해 확인할 수 있습니다.
[](https://user-images.githubusercontent.com/9066602/175771832-b290405c-b2c4-4ab3-b19f-f21d25032ead.mp4)
(모바일 사이즈 대응 등의 반응형 작업은 포함되지 않았습니다. 충분히 큰 디스플레이에서 16:9 사이즈로 브라우저 크기를 이용해주세요.)

## 프로젝트 주제 선정 및 진행 내용
![레퍼런스로 잡은 사이트의 화면](./static/main1.jpg)
주제 후보 3개 중, [텍스트 계단 효과 (fabulatorij)](https://www.fabulatorij.com/) 선정
- 시각적으로 흥미로운 효과
- 스크롤 관련 이펙트 
- 적절한 기술적 난이도

기타 주제로는 "Circular Marquee 생성기" 및 '로딩 인디케이터'가 논의되었습니다.


## 기능 분석 및 설계

레퍼런스 사이트의 코드 구조를 분석하고, [계단 효과 관련 자료](https://www.youtube.com/watch?v=vmH8dil_7uI&ab_channel=creatnprocess)를 통해 애니메이션 효과를 이해했습니다.


### 계층 구조 분석

레퍼런스 사이트의 텍스트 계단은 HTML 상 아래와 같은 구조를 가지고 있습니다.
클래스 명을 기준으로 계층 구조를 나눠보면 `stairs` > `line` > `text` 의 3단계로 나눠 확인할 수 있습니다. 

```html
<div class="stairs_8LJ1-">
    <div class="line_ILzYJ">
        <span class="text_NLT9d" style="transform: translate3d(0px, -87.5079px, 0px);"></span>
        <span class="text_NLT9d" style="transform: translate3d(0px, -87.5079px, 0px);"></span>
        <span class="text_NLT9d" style="transform: translate3d(0px, -87.5079px, 0px);"></span>
```

위 코드의 style에서, y축 transform의 값(`-87.5079px`)이 이 스크롤에 따라 변화하는 것을 확인했습니다.
그리고, CSS 구조를 분석한 결과 아래의 코드가 핵심적인 역할을 합니다.

```css
.line_ILzYJ:nth-child(odd) {
    transform: skew(60deg,-25deg) scaleY(.6667);
}

.line_ILzYJ:nth-child(2n) {
    transform: skew(0deg,-25deg) scaleY(1.33333);
}
```

`line` 아래의 `text` 항목에 `skew`와 `scaleY` 효과를 홀수, 짝수 기준에 따라 나누어 설정합니다. 이를 통해 계단과 같은 효과를 줍니다.

위의 `skew` 및 `scaleY` 스타일을 제거한 경우, 아래와 같이 단조로운 텍스트가 스크롤됩니다.

![bg right:50% 100%](./static/sub2.jpg)

구조 분석 결과로써, 아래의 같은 계층 및 효과 구조를 통해 텍스트 계단 효과 구현을 결정했습니다.

`stairs` > `line (skew , scale)` > `span (translate)`

### 형식 분석

레퍼런스 사이트는 4개의 텍스트를 보여주지만 모든 `line`에 모든 text가 존재하지 않습니다. 이러한 형식은 스크롤이 정해진 수치 이상 수행된 후, 최종 뵤여질 화면에 의해 결정된 것으로 추측합니다.

아래 예시에서는 나타나는 텍스트를 "AAA", "BBB', "CCC", "DDD" 라고 가정합니다.
```markdown
line 1
    1. AAA
line 2
    1. AAA
    2. BBB
line 3
    1. AAA
    2. BBB
    3. CCC
line 4
    1. AAA
    2. BBB
    3. CCC
    4. DDD
...
```

위와 같은 형식을 분석한 결과, 스크롤을 충분히 한 뒤에 최상단의 `line1`에 위치하는 텍스트는 "AAA" 입니다. "AAA"가 스크롤을 통해 최상단까지 이어지는 효과는 꼭 `line2`을 거쳐야합니다.

하지만 "CCC"는 최종적으로 나타날 `line3` 위치에 도달하기까지 `line1` 그리고 `line2`를 거치지 않아도 됩니다. 이러한 이유로 표시할 텍스트를 모두 포함하는 `line`이 존재하고, 하나의 텍스트만 가지는 `line`도 존재합니다.

## 코드 설계

CRA로 생성한 프로젝트에서 다음과 같은 `App.tsx` 구조를 설계했습니다. `Header`는 프로젝트 명칭이 표시되고, `Stair` 라는 컴포넌트에서 스크롤에 따른 텍스트 계단 효과를 구현했습니다.

```jsx
    <PageWrapper>
      <Header>
        <PageTitle>BTS</PageTitle>
      </Header>
      <Stair />
    </PageWrapper>
```

`Stairs` 컴포넌트는 랩핑을 위한 `StairSection`을 제외하고 세가지 컴포넌트들로 구성됩니다. 
`stairs` > `line (skew , scale)` > `span (translate)` 구조 분석 결과를 아래와 같이 대응시켜 구현됐습니다.. 
- `stairs` === `<StairContainer>`
- `line` === `<StairLine>`
- `span` === `<motion.span>`

```jsx
<StairSection>
    <StairContainer>

    {stairLines.map(({ emptySpan, filledSpan, whileHover }, i) => (
        <StairLine key={i}>
        {Array.from({ length: emptySpan + filledSpan }).map((_, j) => (
            <motion.span
            key={i + "-" + j}
            transformTemplate={({ y }) => `translateY(-${y})`}
            style={{ y: scroll }}
            whileHover={whileHover}
            >
            {j + 1 > emptySpan ? names[j - emptySpan] : " "}
            </motion.span>
        ))}
        </StairLine>
    ))}

    </StairContainer>
</StairSection>
```

위와 같은 설게를 토대로, 각자의 텍스트에 hover 이벤트를 구현할 수 있도록 아래의 `StairLineProps` 인터페이스를 선언했습니다.

```ts
interface StairLineProps {
    emptySpan: number;
    filledSpan: number;
    whileHover?: VariantLabels | TargetAndTransition;
}
```

---


## 구현 내용 (컨테이너)

스크롤 애니메이션 적용을 위해 `useViewportScroll` 을 사용하고, 스크롤의 정도(0~1)를 `scrollYProgress`에서 획득합니다.

`useTransform`을 이용해 0에서 1까지 값이 바뀌는 `scrollYProgress`를, 0.1 부터 `MAX_SCROLL_TOP`로 바뀌는 `scroll` 이라는 값에 변환해 저장합니다.

```jsx
const Stair = () => {
    const { scrollYProgress } = useViewportScroll();
    const scroll = useTransform(scrollYProgress, [0, 1], [0.1, MAX_SCROLL_TOP]);

    return ( ... )
}
```

위의 scroll이 반영되는 부분은 각 `motion.span`의 y 값입니다.
```jsx
<motion.span                 
    transformTemplate={({ y }) => `translateY(-${y})`} // translateY(-y)
    style={{ y: scroll }}  // y : scroll
    whileHover={whileHover}>
    {names}
</motion.span>
```

스크롤에 따른 `translateY` 로 의도한 스크롤 효과가 작동은 하는데, 끊김 현상을 해결하고자 아래의 transition을 설정했습니다. 이는 `transform:translateY` 뿐만 아니라, 각자 hover하는 효과에도 적용됩니다.

```css
transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
```

스크롤을 계속 하더라도, 글자가 첫번째 계단에 걸치기 위한 이펙트를 위해 `useTransform`에서 `글자 크기 * 5`에 해당하는 최대값으로 보정했습니다.

```js
const MAX_SCROLL_TOP = 480; // 6rem * 5
const scroll = useTransform(scrollYProgress, [0, 1], [0.1, MAX_SCROLL_TOP]);
```

### 그외 공유할만한 것
개발 초기에 `Stair` 컴포넌트 높이를 `100vh` 단위로 지정해서, `useViewportScroll`을 오작동하게 만들었던 이슈가 있었습니다.
```js
const PageWrapper = styled.main`
    height: 100vh;
`;
```

## 구현 내용 (개별 애니메이션)

이 프로젝트는 4개의 계단이 4명의 참여자 이름을 표시합니다. 본인 이름에 마우스 hover 애니메이션을 각자 스타일했습니다.
```js
stairLines.map(({ emptySpan, filledSpan, whileHover }, i) => (
<motion.span ...
    whileHover={whileHover}      // 자신 이름 영역에 이팩트 적용
>
...
```

코드 설계를 통해 각 텍스트가 오르내릴 계단을 `StairLine`을 선언했습니다. (`StairLine` 속에는 텍스트가 `<motion.span>` 으로 존재합니다.)

```js
interface StairLineProps {
    emptySpan: number;
    filledSpan: number;
    whileHover?: VariantLabels | TargetAndTransition;
}
```

`StairLine`의 세가지 속성(`StairLineProps`) 중, `VariantLabels | TargetAndTransition` 타입의 `whileHover`을 통해 텍스트 계단에 마우스를 hover할 경우 재생될 애니메이션을 지정할 수 있습니다.

이는 map함수를 통해 각 텍스트(`<motion.span>`)의 `whileHover` 파라미터로 전달됩니다.

번외로 `emptySpan` 그리고 `filledSpan`은, `StairLine`에 추가될 텍스트(`span`)가 빈 텍스트의 개수와 채워진 텍스트의 개수를 가지고 있습니다.


```js
const stairLines: StairLineProps[] = [
{
    //멤버 1
    whileHover: {
        filter: "brightness(115%) drop-shadow(-6px -4px 3px #c18214)",
        textShadow: "-6px -4px 3px #ffa412",
    }, ( ... )
},
{
    //멤버 2
    whileHover: {
        color: "#ffffff",
        boxShadow: `inset 1000px 0 0 0 #54b3d6`,
    }, ( ... )
}
```

각자 스타일링한 애니메이션은 위의 예시처럼 합쳐져서 한 배열(`stairLines`) 안에서 관리되도록 구현했습니다.


### Credit

Team 2 : 김병헌 문석영 이본행 장순호 
(가나다 순)


2022.05.16 ~ 2022.05.30
