import styled from "styled-components";

const LogoRibbon = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
`;

const Logo: React.FC = () => {
  return <LogoRibbon>인연</LogoRibbon>;
};

export default Logo;
