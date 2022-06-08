import * as React from 'react';
import { styled } from '@stitches/react';

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterBox>
      <IncrementButton onClick={increment}>+</IncrementButton>
      <CounterNumber>{count}</CounterNumber>
      <DecrementButton onClick={decrement}>-</DecrementButton>
    </CounterBox>
  );
};

export default App;

const CounterBox = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
});

const CounterNumber = styled('span', {
  fontSize: 24,
  fontWeight: 700,
});

const IncrementButton = styled('button', {
  fontSize: 20,
  fontWeight: 700,
});

const DecrementButton = styled('button', {
  fontSize: 20,
  fontWeight: 700,
});
