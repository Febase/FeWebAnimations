/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled from '@emotion/styled';
import SpeakerListItem from './SpeakerListItem';

type SpeakerListProps = {
  order: number;
  threshold: number;
};
function SpeakerList({ order, threshold }: SpeakerListProps): React.ReactElement {
  const ratio = (threshold - 2.5) * 40;
  return (
    <List
      order={order}
      style={{ transform: order ? `translate3d(${ratio}%,0,0)` : `translate3d(calc(0% - ${ratio}%),0,0)` }}
    >
      <SpeakerListItem />
      <SpeakerListItem />
      <SpeakerListItem />
      <SpeakerListItem />
      <SpeakerListItem />
      <SpeakerListItem />
    </List>
  );
}

export default SpeakerList;

const List = styled.ul<{ order: number }>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  position: absolute;
  & > li + li {
    margin-left: 20px;
  }
  top: ${({ order }) => 200 + order * 200}px;
`;
