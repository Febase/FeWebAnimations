import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import Profile from '../../assets/nareum.png';
function IntroSection() {
  return (
    <Container>
      <MadeBy>FeBase Animation Study</MadeBy>
      <Title>
        FrontEnd Developer
        <br /> Nareum
      </Title>
      <ProfileImage src={Profile} width={160} />
      <Introduce>
        <Name>이재훈(Lee Jae Hoon)</Name>
        <AutoRow>
          <Badge>Email</Badge>
          <p>wognsdl931@gmail.com</p>
        </AutoRow>
        <AutoRow>
          <Badge>Gitbhub</Badge>
          <p>https://github.com/na-reum</p>
        </AutoRow>
        <AutoRow>
          <Badge>blog</Badge>
          <p>https://velog.io/@nareum</p>
        </AutoRow>
      </Introduce>
    </Container>
  );
}

export default IntroSection;

const Container = styled('section', {
  position: 'relative',
  width: '420px',
});

const Title = styled('h1', {
  fontSize: '40px',
  fontWeight: 900,
  margin: '0 0 80px 0',
});

const MadeBy = styled('aside', {
  position: 'absolute',
  width: '100%',
  textAlign: 'right',
  color: '#fff',
  right: '590px',
});

const ProfileImage = styled(motion.img, {
  position: 'absolute',
  textAlign: 'right',
  color: '#fff',
  right: '590px',
  borderRadius: '10px',
  margin: '0 0 30px 0',
  border: '5px solid #f0f0f0;',
  boxShadow: '0 0.08rem 0.35rem rgb(0 0 0 / 18%)',
});

const Introduce = styled(motion.div, {
  lineHeight: 1.75,
});

const Name = styled(motion.p, {
  fontSize: '1.625rem',
  fontWeight: 900,
  margin: '0 0 1.8rem 0',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '',
    width: '100%',
    height: '6px',
    backgroundColor: '#ffaf19',
    position: 'absolute',
    bottom: '10px',
    left: 0,
    opacity: 0.5,
    zIndex: 1,
  },
});

const AutoRow = styled(motion.div, {
  display: 'flex',
  margin: '0 0 1rem 0',
  alignItems: 'center',
});

const Badge = styled('span', {
  background: 'rgba(255,175,25,.1)',
  color: '#ffaf19',
  borderRadius: '1.25rem',
  fontSize: '.75rem',
  fontWeight: 700,
  padding: '0 5px',
  marginRight: '0.5rem',
  minWidth: '4rem',
  textAlign: 'center',
});
