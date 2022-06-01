import * as React from 'react';
import { styled } from '@stitches/react';

interface TabbarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  activeBgColor: string;
  children: React.ReactNode;
}

const TabbarItem: React.FC<TabbarItemProps> = ({
  isActive,
  activeBgColor,
  onClick,
  onTransitionEnd,
  children,
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      onTransitionEnd={onTransitionEnd}
      css={isActive ? {
        transform: 'translate3d(0, -16px, 0)',
        '&::before': {
          transform: 'scale(1)',
          backgroundColor: activeBgColor,
        }
      } : undefined}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TabbarItem;

const Button = styled('button', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  background: 'unset',
  border: 'unset',
  outline: 'unset',
  width: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '50%',
  transition: 'transform 0.5s',
  '&::before': {
    content: '',
    zIndex: -1,
    width: 80,
    height: 80,
    borderRadius: '50%',
    position: 'absolute',
    transform: 'scale(0)',
    transition: 'background-color 0.75s',
  },
});
