import styled from "styled-components";
const names = [
  "BONHAENG LEE",
  "SEOKYOUNG MOON",
  "SOONHO JANG",
  "BYOUNGHERN KIM",
];

function App() {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>BTS</PageTitle>
      </Header>
      <StairSection>
        <StairLine>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{names[0]}</span>
        </StairLine>
        <StairLine>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
        </StairLine>
        <StairLine>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
          <span>{names[2]}</span>
        </StairLine>
        <StairLine>
          <span></span>
          <span></span>
          <span></span>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
          <span>{names[2]}</span>
          <span>{names[3]}</span>
        </StairLine>
        <StairLine>
          <span></span>
          <span></span>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
          <span>{names[2]}</span>
          <span>{names[3]}</span>
        </StairLine>
        <StairLine>
          <span></span>
          <span>{names[0]}</span>
          <span>{names[1]}</span>
          <span>{names[2]}</span>
          <span>{names[3]}</span>
        </StairLine>
      </StairSection>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.main`
  padding: 0 1rem;
  background-color: #ebe8d6;
  height: 100vh;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  height: 64px;
  padding: 1rem 0;
`;
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
const StairSection = styled.section``;
const StairLine = styled.div`
  font-family: "Lexend Deca", sans-serif;
  height: 6rem;
  backface-visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  > span {
    display: block;
    font-weight: 700;
    font-size: 6rem;
    line-height: 1;
    text-transform: uppercase;
  }

  &:nth-child(odd) {
    transform: skew(60deg, -25deg) scaleY(0.6667);
    color: #853e18;
  }

  &:nth-child(even) {
    transform: skew(0deg, -25deg) scaleY(1.333);
    color: #ffaa22;
  }

  &:first-child {
    left: 3rem;
  }

  &:nth-child(2) {
    left: 6rem;
  }

  &:nth-child(3) {
    left: 9rem;
  }

  &:nth-child(4) {
    left: 12rem;
  }

  &:nth-child(5) {
    left: 15rem;
  }

  &:last-child {
    left: 18rem;
  }
`;
