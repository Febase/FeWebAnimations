import Type2 from './Type2';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

type ComponentType = typeof Type2;

export default {
  title: 'Team1/Tabbars',
  component: Type2,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Type2 {...args} />;

export const _Type2 = Template.bind({});
