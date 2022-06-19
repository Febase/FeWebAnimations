import * as React from 'react';
import { styled } from '@stitches/react';

const MakerLabel: React.FC = () => {
  return (
    <Box>
      <Anchor href={GITHUB_URL} target={'_blank'}>
        <svg
          width={24}
          height={24}
          viewBox={'0 0 24 24'}
          fill={'currentColor'}
        >
          <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.616 7.616 0 0 0 12 7.868a7.643 7.643 0 0 0-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 0 0-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0 1 12 4a8 8 0 0 1 2.534 15.59z" />
        </svg>
      </Anchor>
      <Anchor href={GITHUB_PROFILE_URL} target={'_blank'}>
        AKALEE'S PROFILE
      </Anchor>
      <Anchor href={GITHUB_PROJECT_URL} target={'_blank'}>
        PROJECT REPOSITORY
      </Anchor>
    </Box>
  );
};

export default MakerLabel;

const GITHUB_URL = 'https://github.com';
const GITHUB_PROFILE_URL = 'https://github.com/wooogi123';
const GITHUB_PROJECT_URL = 'https://github.com/Febase/FeWebAnimations';

const Box = styled('div', {
  position: 'absolute',
  bottom: '16%',
  width: '100%',
  borderColor: 'rgba(255, 255, 255, 0.24)',
  borderTopWidth: 1,
  borderRightWidth: 0,
  borderBottomWidth: 1,
  borderLeftWidth: 0,
  borderStyle: 'solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 8,
  paddingBottom: 8,
  gap: 16,
  '--color-maker': 'rgba(255, 255, 255, 0.64)',
});

const Anchor = styled('a', {
  color: 'var(--color-maker)',
  fontSize: '1rem',
  textDecoration: 'none',
  inlineSize: 'min-content',
});

