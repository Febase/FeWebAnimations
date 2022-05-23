import Buttons from "components/buttons/Buttons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/Test",
  component: Buttons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons />;

export const Primary = Template.bind({});
