import { PricingCard } from "@/components/PricingCard";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/PricingCard",
  component: PricingCard,
} as Meta<typeof PricingCard>;

export const Monthly: StoryObj<typeof PricingCard> = {
  args: {
    primary: false,
    title: "Basic",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: "10",
    yearlyPrice: "30",
    supportedFeatures: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
    ],
    unsupportedFeatures: [
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video",
    ],
  },
};
