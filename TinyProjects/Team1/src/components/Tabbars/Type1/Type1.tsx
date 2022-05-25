import * as React from 'react';
import Icons from './Icons';
import TabbarBase from './TabbarBase';
import TabbarItem from './TabbarItem';
import TabbarIndicator from './TabbarIndicator';
import colors from './colors';

const Type1: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const [isIndicatorAnimated, setIsIndicatorAnimated] = React.useState<boolean>(false);
  const [isItemAnimated, setIsItemAnimated] = React.useState<boolean>(false);

  const prevPositionX = React.useRef<number>(0);
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
      setPositionX(Math.floor(buttonEl.offsetLeft - AXIS_X_PADDING));
    };

  return (
    <TabbarBase>
      <TabbarIndicator
        x={positionX}
        onAnimationComplete={() => setIsIndicatorAnimated(false)}
      />
      {items.map(({ idx, Icon }) => (
        <TabbarItem
          isActive={selectedIndex === idx}
          activeBgColor={colors[idx]}
          onClick={handleClickItem}
          onTransitionEnd={() => setIsItemAnimated(false)}
          key={idx}
          data-item-index={idx}
        >
          <Icon isAnimate={selectedIndex === idx} />
        </TabbarItem>
      ))}
    </TabbarBase>
  );
};

export default Type1;

const items = [
  { idx: 0, Icon: Icons.Type1 },
  { idx: 1, Icon: Icons.Type2 },
  { idx: 2, Icon: Icons.Type3 },
  { idx: 3, Icon: Icons.Type4 },
  { idx: 4, Icon: Icons.Type5 },
] as const;

const AXIS_X_PADDING = 32;
