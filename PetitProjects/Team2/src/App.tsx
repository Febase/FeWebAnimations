import React from 'react';
import CanvasWrapper from './components/CanvasWrapper'
import Logo from './components/Logo'
import MenuButton from './components/MenuButton'
import Menu from './components/Menu'
import Main from './components/Main'
import PageContent from './components/PageContent'

function App() {
  return (
    <div>
      <CanvasWrapper />
      <Logo />
      <MenuButton />
      <Menu />
      <Main>
        <PageContent />
      </Main>
    </div>
  );
}

export default App;


// body {-webkit-font-smoothing: subpixel-antialiased;]}
// 	div → absolute, 100% , 100vh
// 	canvas → 
// 	logo → svg로 만든이유?
// 	menu-button → div * 3 클릭시  transform. 
// 	menu → 열릴때 스크롤때마다 background color 업데이트
// 	wrapper → w 100%, transform-origin: center 50vh
// 		page-content 
// 			ul#bulltes → 스크롤시 transform: translateY(-n), —selection-color  변경
// 				li → .focus 추가시 line-height: 227px font-size 320px; 까지 올라감. 기존 focus는 반대로 줄어들음
// 			ul#pages →   transition: filter 0.5s;
// 				li → 각각의 엘리먼트들이 data-primary-Color, secondary를 가지고 있음