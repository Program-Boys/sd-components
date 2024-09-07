import type { Meta, StoryObj } from "@storybook/react";
import { SDButton } from "./SDButton";

const meta = {
  title: "Components/SDButton",
  args: {},
  component: SDButton,
} satisfies Meta<any>;

export default meta;

type Story = StoryObj<any>;

export const Primary: Story = {
  args: {},
};
