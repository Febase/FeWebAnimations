# 4. SVG 컨테이너 요소

<aside>
😎 SVG는 다양한 요소들로 구성되어 화면에 그려집니다. 기본적인 몇 가지 요소와 각각의 특징을 간단하게 알아보겠습니다!

</aside>

## 1. `<g>`

- 다른 SVG 요소들을 **group**하기 위함
- `<g>`에 적용된 transformation은 자식 요소들에 적용됨
  - ex. 자식 요소들에게 fill, stroke, stroke-width를 적용

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Using g to inherit presentation attributes -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

## 2. `<use>`

- SVG 내 요소를 재사용
- `href`를 사용해 재사용할 요소를 호출
  - ex. 기존에 정의된 `myCircle`의 속성을 따르는 복제본 생성

```svg
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue"/>
  <use href="#myCircle" x="10" fill="blue"/>
  <use href="#myCircle" x="20" fill="white" stroke="red"/>
  <!--
stroke="red" will be ignored here, as stroke was already set on myCircle.
Most attributes (except for x, y, width, height and (xlink:)href)
do not override those set in the ancestor.
That's why the circles have different x positions, but the same stroke value.
  -->
</svg>

```

## 3. `<defs>`

- 그래픽 객체를 정의(**definitions**)
- `<defs>` 내부의 요소들은 즉시 렌더링되지 않으며, 화면에 나타내기 위해서는 참조해야함
  - ex. `<use href="#myDefinedCircle"/>`

```svg
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Some graphical objects to use -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my graphical objects -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

## 4. `<symbol>`

- 요소들을 그룹핑하여 템플릿을 정의
  - `viewBox`, `preserveAspectRatio` 속성을 설정할 수 있음
- `<use>`로 참조하여 사용할 수 있음
  - ex. 10x10 객체 가운데에 원이 있는 템플릿을 정의하여 사용

```svg
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
  <!-- Our symbol in its own coordinate system -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

   <!-- A grid to materialize our symbol positioning -->
  <path d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" fill="none" stroke="pink" />

  <!-- All instances of our symbol -->
  <use href="#myDot" x="5"  y="5" style="opacity:1.0" />
  <use href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

## 5. `<svg>`

- 새로운 coordinate system과 viewport를 정의하는 컨테이너
- `<svg>` 내부에 `<svg>` 를 중첩해서 사용할 수 있음

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>

```

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
