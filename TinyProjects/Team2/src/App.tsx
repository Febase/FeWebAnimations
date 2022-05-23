import styled from "styled-components";
import Stair from "./Stair";

function App() {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>BTS</PageTitle>
      </Header>
      <Stair />
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.main`
  position: relative;
  background-color: #ebe8d6;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  height: 64px;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
