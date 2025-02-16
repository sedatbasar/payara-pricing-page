import type { Preview } from "@storybook/react";
import React from "react";
import { BillingProvider } from "../src/context/BillingContext";
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <BillingProvider>
        <Story />
      </BillingProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
