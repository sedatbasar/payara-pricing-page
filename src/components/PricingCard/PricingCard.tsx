"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { useBilling } from "@/context/BillingContext";

export interface PricingCardProps {
  primary?: boolean;
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  supportedFeatures: string[];
  unsupportedFeatures?: string[];
}

const PricingCard = ({
  primary,
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  supportedFeatures,
  unsupportedFeatures,
}: PricingCardProps) => {
  const { billingType } = useBilling();
  return (
    <Card
      className={cn(
        "w-full lg:w-1/3 py-10 border-none",
        primary &&
          "py-[70px] bg-violet-700 text-violet-50 dark:text-gray-100 shadow-lg z-10 -my-16 lg:my-0 lg:-mx-4",
        !primary &&
          "my-[30px] bg-violet-100 dark:bg-gray-700 text-violet-950 dark:text-violet-50",
      )}
      data-testid="pricing-card"
    >
      <CardHeader className="min-h-[6.25rem]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center" data-testid="price">
          <span className="text-xl">
            ${billingType === "monthly" ? monthlyPrice : yearlyPrice}
          </span>
          <span className="ml-1">
            / {billingType === "monthly" ? "Month" : "Year"}
          </span>
        </div>
        <Button
          variant={primary ? "default" : "secondary"}
          className="w-full mt-6"
        >
          Get Started Now
        </Button>
      </CardContent>
      <CardFooter className="flex-col items-start gap-3 mt-10">
        {supportedFeatures.map((feature, index) => (
          <div
            key={`supported-item-${title}-${index}}`}
            className="flex items-center gap-4"
          >
            <div
              className={cn(
                "bg-violet-100 dark:bg-violet-200 rounded-full w-8 h-8 flex items-center justify-center text-violet-700",
                !primary &&
                  "bg-violet-500 dark:bg-violet-300 text-violet-100 dark:text-gray-700",
              )}
            >
              <Check size={16} />
            </div>
            {feature}
          </div>
        ))}
        {unsupportedFeatures &&
          unsupportedFeatures.map((feature, index) => (
            <div
              key={`unsupported-item-${title}-${index}}`}
              className="flex items-center gap-4 opacity-40"
            >
              <div
                className={cn(
                  "bg-violet-100 dark:bg-violet-200 rounded-full w-8 h-8 flex items-center justify-center text-violet-700",
                  !primary &&
                    "bg-violet-500 dark:bg-violet-300 text-violet-100 dark:text-gray-700",
                )}
              >
                <X size={16} />
              </div>
              {feature}
            </div>
          ))}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
