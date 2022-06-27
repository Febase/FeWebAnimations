import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Header = () => {
  return (
    <HeadNavbar variants={fadeIn('down')} initial='initial' animate='animate'>
      <Logo>NaReum Portfolio</Logo>
      <NavList>
        <NavListItem>INFO</NavListItem>
        <NavListItem>PROJECT</NavListItem>
        <NavListItem>CONTACT</NavListItem>
      </NavList>
    </HeadNavbar>
  );
};

export default Header;

const HeadNavbar = styled(motion.nav, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 5rem 1rem 5rem',
});

const Logo = styled('span', {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: 900,
});

const NavList = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
});

const NavListItem = styled('li', {
  marginLeft: '1rem',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
});
