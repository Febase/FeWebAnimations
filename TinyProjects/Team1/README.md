# :family_man_man_girl_boy: 1 Team



## 자료 조사 및 선정

- **다혜**
  - [Checkbox](https://codepen.io/aaroniker/pen/ZEpEvdz)
- **정훈**
  - Button
  - [ex1](https://codepen.io/aaroniker/pen/eYOVrNa)
- **도호**
  - [3D carousel](https://www.framer.com/examples/3d-carousel/)
- **재욱**
  - Tab bar
  - [ex1](https://codepen.io/abxlfazl/pen/VwKzaEm)
  - [ex2](https://codepen.io/aaroniker/pen/rNMmZvq)



## 선정 주제

- 스토리북 기반

  [UI 컴포넌트 구축하기](https://storybook.js.org/tutorials/design-systems-for-developers/react/ko/build/)



## 그라운드 룰

1. 충분한 고민 후 어떤 걸 찾아봤는지, 어떤 점이 안 되는지 공유하기!
   - 적어도 2~3시간은 고민해보자 ! 



## 일정

- **2022-05-20** 개발환경 구축 (정훈)
- **2022-05-22** 중간 발표 전 모임 (22:40 ~ 1시간 이내)
    - 중간 발표 전 정리를 위한 모임
    - 현재까지 진행 상황
- **2022-05-23** 중간 발표
    - 선정한 주제
        - UI Kit 만들기
    - 진행 상황
        - 다혜
            - 스토리북 사용법 공부중
            - framer motion을 사용하여 check box 구현중
        - 도호
            - framer motion 공부
            - 간단한 chip event 구현하다가 실패
        - 정훈
            - button에 bus가 움직이는 animation 구현중
        - 재욱
            - 2가지 종류의 tabbar 구현중
            - framer-motion을 사용한 svg animation 구현중
    - 시연
        - stitches(styling library)에 대해서 간단하게 설명 (재욱님)
    - 앞으로 진행 방향
        - storybook에 UI를 올리고 관심가는 다른 사람의 주제를 구현해볼 예정
            - 이는 코드 리뷰의 질을 높이기 위해서
    - Q&A
- **2022-05-26** 팀 온라인 코드리뷰 및 최종 발표 준비



## 개발환경 및 프로젝트 정보

- CRA TS 템플릿으로 프로젝트 생성
- 설치한 package
    - framer-motion
    - storybook
    - stitches
- 스토리북은 예제들 포함되있습니다
- 절대경로 설정
- 프로젝트 전체 스타일링을 위한 globalstyle, theme 적용
    - **stitches import 주의 사항**
theme 적용으로 stitches에서 제공하는 styled, globalStyle, css 같은 것들은 /style/theme 파일에서 import해서 사용해야 합니다
기본적으로 styled는 'import { styled } from "@stitches/react";으로 불러와서 사용했지만 theme를 사용하기때문에 import { styled } from "style/theme";에서 불러와야 theme에 적용된 변수들을 사용할 수 있습니다
    - [theme 관련 사용법](https://stitches.dev/docs/tokens)
문서의 Property Mapping 쪽을 보면 theme 객체에서 선언한 keyname, 아마 token이라고 부르는 것 같습니다, 작성한 token이 어떤 CSS 속성에서 변수처럼 사용가능한지 확인 할 수 있습니다
- [framer + stitches 사용법 참고](https://codesandbox.io/s/mzt34)

- 프로젝트 실행`npm run start or yarn start`
- 스토리북 실행 `npm run storybook`



## 참조 사이트

- [Online Tutorials](https://youtu.be/pKuvi9t4D4Y)
- [인터렉티브, 아이콘 단위 컴포넌트, aaroniker](https://codepen.io/aaroniker)
- [약간의 애니메이션으로 확연히 다른 UI, abxlfazl](https://codepen.io/abxlfazl)
- [dribbble, 드리블, 디자인 포트폴리오 플랫폼](https://dribbble.com/)
- [Codrops, 인터렉티브 Demo, Source](https://tympanus.net/codrops/category/playground/)
- [mui](https://mui.com/material-ui/react-autocomplete/)
- [움직이는 framer](https://codesandbox.io/s/framer-motion-morphsvg-example-dp7to?from-embed=&file=/src/App.tsx)



## 5/23 회의

- [공유] 시간차 애니메이션
  - key값이 같으면 동일 애니메이션이라고 판단 (delay children)
- story는 tsx/mdx 중 tsx로 작성하기로 결정
- repo와 branch 구성 - 도호님께서 readme 올리면서 공통 프로젝트 구조 올려주실 예정