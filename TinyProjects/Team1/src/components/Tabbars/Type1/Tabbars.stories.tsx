import Type1 from './Type1';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

type ComponentType = typeof Type1;

export default {
  title: 'Team1/Tabbars',
  component: Type1,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Type1 {...args} />;

export const _Type1 = Template.bind({});
