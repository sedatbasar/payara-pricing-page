import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import PricingCard from "./PricingCard";
import { renderWithBillingContext } from "@/utils/test-utils";

const mockPricingCard = {
  primary: false,
  title: "Basic",
  description: "Ideal for individuals who need quick access to basic features.",
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
};

describe("PricingCard", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the default pricing card", () => {
    renderWithBillingContext(<PricingCard {...mockPricingCard} />);
    // ensure the default card has the correct styles
    expect(
      screen.getByTestId("pricing-card").classList.contains("bg-violet-100"),
    ).toBe(true);

    // ensure the card renders the correct content
    expect(screen.getByText(mockPricingCard.title)).toBeDefined();
    expect(screen.getByText(mockPricingCard.description)).toBeDefined();
    expect(screen.getByTestId("price").textContent).toBe(
      `$${mockPricingCard.monthlyPrice}/ Month`,
    );
  });
  it("renders the primary pricing card", () => {
    renderWithBillingContext(<PricingCard {...mockPricingCard} primary />);
    // ensure the primary card has the correct styles
    expect(
      screen.getByTestId("pricing-card").classList.contains("bg-violet-700"),
    ).toBe(true);
  });
});
