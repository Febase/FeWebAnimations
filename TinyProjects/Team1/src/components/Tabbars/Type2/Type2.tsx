import * as React from 'react';
import TabbarBase from './TabbarBase';
import TabbarIndicator from './TabbarIndicator';
import IconButtons from './IconButtons';

const Type2: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const [isIndicatorAnimated, setIsIndicatorAnimated] = React.useState<boolean>(false);
  const [isItemAnimated, setIsItemAnimated] = React.useState<boolean>(false);

  const prevPositionX = React.useRef<number>(ITEM_GAP);
  const [positionX, setPositionX] = React.useState<number>(prevPositionX.current);

  const handleClickItem: React.MouseEventHandler<HTMLButtonElement> =
    (e) => {
      if (isIndicatorAnimated) return;
      if (isItemAnimated) return;

      const buttonEl = e.currentTarget;
      const itemIndex = Number(buttonEl.dataset.itemIndex);
      if (Number.isNaN(itemIndex)) return;

      setIsIndicatorAnimated(true);
      setIsItemAnimated(true);
      setSelectedIndex(itemIndex);
      setPositionX(Math.floor(buttonEl.offsetLeft - (AXIS_X_PADDING - ITEM_GAP)));
    };

  const handleItemAnimationComplete =
    (type: 'active' | 'deactive') => {
      if (type === 'active') setIsItemAnimated(false);
    };

  return (
    <TabbarBase>
      <TabbarIndicator
        x={positionX}
        onAnimationComplete={() => setIsIndicatorAnimated(false)}
      />
      {items.map(({ idx, Item }) => (
        <Item
          isAnimate={selectedIndex === idx}
          onClick={handleClickItem}
          onAnimationComplete={handleItemAnimationComplete}
          key={idx}
          data-item-index={idx}
        />
      ))}
    </TabbarBase>
  );
};

export default Type2;

const items = [
  { idx: 0, Item: IconButtons.Home },
  { idx: 1, Item: IconButtons.Chat },
  { idx: 2, Item: IconButtons.Folder },
  { idx: 3, Item: IconButtons.User },
] as const;

const ITEM_GAP = 28;
const AXIS_X_PADDING = 48;
