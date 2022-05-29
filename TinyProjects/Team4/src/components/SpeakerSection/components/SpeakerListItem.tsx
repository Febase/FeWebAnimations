import styled from '@emotion/styled';
import pengsu from '../assets/peng.png';

function SpeakerListItem(): React.ReactElement {
  return (
    <ListItem>
      <Introduction>
        <Company>EBS</Company>
        <Name>펭수</Name>
      </Introduction>
      <ProfileImage src={pengsu} alt="펭수" />
    </ListItem>
  );
}

export default SpeakerListItem;

const ListItem = styled.li`
  background-color: #1f242c;
  border-radius: 12px;
  height: 164px;
  overflow: hidden;
  position: relative;
  width: 310px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;

const Introduction = styled.div``;

const Company = styled.span`
  color: #d7deeb;
  font-size: 14px;
  line-height: 22px;
`;
const Name = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;
const ProfileImage = styled.img`
  position: absolute;
  top: 5px;
  right: 50px;
  width: 190px;
`;
