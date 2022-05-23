import Chip from "components/Chip/Chip";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/Chip",
  component: Chip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip />;

export const Primary = Template.bind({});
