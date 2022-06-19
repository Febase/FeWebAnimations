import * as React from 'react';

const useMediaValue = (
  initialValue: number,
  values: number[],
  ...rest: boolean[]
) => {
  const [value, setValue] = React.useState<number>(initialValue);

  const updatedValue = rest.reduce<number>((acc, item, index) => {
    if (item) acc = values[index];

    return acc;
  }, initialValue);

  React.useEffect(() => {
    setValue(updatedValue);
  }, [...rest]);

  return value;
};

export default useMediaValue;
