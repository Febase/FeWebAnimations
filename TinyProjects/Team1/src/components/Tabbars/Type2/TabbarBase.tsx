import * as React from 'react';
import { styled } from '@stitches/react';

interface TabbarBaseProps {
  children: React.ReactNode;
}

const TabbarBase: React.FC<TabbarBaseProps> = ({ children }) =>
  <Base>{children}</Base>;

export default TabbarBase;

const Base = styled('div', {
  minHeight: 100,
  boxSizing: 'border-box',
  borderRadius: 32,
  paddingLeft: 48,
  paddingRight: 48,
  position: 'relative',
  background: '#ffffff',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 28,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.16), 0px 6px 6px rgba(0, 0, 0, 0.24)',
});
