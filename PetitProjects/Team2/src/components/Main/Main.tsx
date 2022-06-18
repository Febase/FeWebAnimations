import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  z-index: 1;
`;

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Main;
