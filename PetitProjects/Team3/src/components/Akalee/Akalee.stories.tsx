import Akalee from './Akalee';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'TEAM3/Akalee',
  component: Akalee,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Akalee>;

const Template: ComponentStory<typeof Akalee> = (args) => <Akalee {...args} />;

export const Default = Template.bind({});
