import React from "react";
import PricingCard, { PricingCardProps } from "../PricingCard/PricingCard";

async function getPricings(): Promise<{ pricings: PricingCardProps[] }> {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // ⏳ Add 2-second delay to be able to see the skeleton loader

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pricings`, {
    cache: "no-store",
  });
  return res.json();
}
type GetPricings = ReturnType<typeof getPricings>;

const PricingCards = async () => {
  const { pricings } = await (getPricings() as GetPricings);
  return pricings.map((pricing) => (
    <PricingCard key={pricing.title} {...pricing} />
  ));
};

export default PricingCards;
