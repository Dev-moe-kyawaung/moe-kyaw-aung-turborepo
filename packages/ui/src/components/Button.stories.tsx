import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Click me" },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { variant: "primary", size: "md" },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { variant: "secondary", size: "lg" },
};
