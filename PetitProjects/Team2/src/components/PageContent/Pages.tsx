import { intro } from './introduce';
import styled from "styled-components"

const PageList = styled.ul``
const PageItem = styled.li``
const PageTitle = styled.h3`
  font-size: 72px;
  margin: 0 0 35px 0;
  /* width: 74.73469388%; */
  width: 61.734694%;
  padding-top: 23px;
  line-height: 1.025em;
  font-weight: 600;
`
const PageDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  width: 36.2244898%;
  font-weight: 400;
`

const Pages = () => {
  return (
    <PageList>
      {intro.map((item) => (
        <PageItem>
          <PageTitle>{item.fullName}</PageTitle>
          <PageDescription>저는 프론트엔드 개발자이고, [{item.keywords[0]}]입니다.</PageDescription>
        </PageItem>
      ))}
    </PageList>
  );
};

export default Pages;
