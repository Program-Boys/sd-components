import type { Meta, StoryObj } from "@storybook/react";
import { SDButton } from "./SDButton";
import { SDButtonProps } from "./SDButton.type";

const meta = {
  title: "Components/SDButton",
  args: {
    text: "Button",
  },
  component: SDButton,
} satisfies Meta<SDButtonProps>;

export default meta;

type Story = StoryObj<SDButtonProps>;

export const Primary: Story = {
  args: {},
};
