import React from "react";
import PricingCardSkeleton from "../PricingCard/PricingCardSkeleton";

const PricingCardsSkeleton = () => {
  return (
    <>
      <PricingCardSkeleton />
      <PricingCardSkeleton primary />
      <PricingCardSkeleton />
    </>
  );
};

export default PricingCardsSkeleton;
