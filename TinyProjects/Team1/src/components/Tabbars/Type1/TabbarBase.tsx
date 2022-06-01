import * as React from 'react';
import { styled } from '@stitches/react';

interface TabbarBaseProps {
  children: React.ReactNode;
}

const TabbarBase: React.FC<TabbarBaseProps> = ({ children }) =>
  <Box>{children}</Box>;

export default TabbarBase;

const Box = styled('menu', {
  width: 560,
  position: 'relative',
  padding: '12px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#333333',
  boxSizing: 'border-box',
});
