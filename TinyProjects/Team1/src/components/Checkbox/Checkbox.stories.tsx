import Checkbox from "components/Checkbox/Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Example/Checkbox",
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}/>;

export const Primary = Template.bind({
    size: 7
});
