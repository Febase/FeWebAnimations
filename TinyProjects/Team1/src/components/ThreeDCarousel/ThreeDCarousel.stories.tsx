import ThreeDCarousel from "components/ThreeDCarousel/ThreeDCarousel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/ThreeDCarousel",
  component: ThreeDCarousel,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ThreeDCarousel>;

const Template: ComponentStory<typeof ThreeDCarousel> = (args) => <ThreeDCarousel {...args}/>;

export const Primary = Template.bind({
  size: 7
});
