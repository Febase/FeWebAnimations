import ClockCore from './ClockCore';
import { useClockState } from './hooks';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'TEAM3/Akalee/ClockCore',
  component: ClockCore,
  argTypes: {
    hour: {
      control: {
        type: 'range',
        min: 0,
        max: 23,
        step: 1,
      },
    },
    minute: {
      control: {
        type: 'range',
        min: 0,
        max: 59,
        step: 1,
      },
    },
    second: {
      control: {
        type: 'range',
        min: 0,
        max: 59,
        step: 1,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ClockCore>;

const Template: ComponentStory<typeof ClockCore> =
  (args) => <ClockCore {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 480,
  hour: 0,
  minute: 0,
  second: 0,
};

export const WithHook = () => {
  const { hour, minute, second } = useClockState();

  return (
    <ClockCore
      size={480}
      hour={hour}
      minute={minute}
      second={second}
    />
  );
};
