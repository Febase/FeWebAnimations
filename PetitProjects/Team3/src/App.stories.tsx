import App from './App';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'TEAM3/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
