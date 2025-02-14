import { PricingCards } from "@/components/PricingCards";
import PricingCardsSkeleton from "@/components/PricingCards/PricingCardsSkeleton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto relative pb-8">
      <ThemeToggle />
      <main>
        <div className="text-center mt-18">
          <h1>
            Powerful features for{" "}
            <span className="text-violet-600 dark:text-violet-500">
              powerful creators
            </span>
          </h1>
          <div className="text-base text-gray-600 dark:text-gray-400">
            Choose a plan that’s right for you
          </div>
        </div>
        <div className="flex flex-col mt-[60px] lg:mt-[84px] lg:flex-row">
          <Suspense fallback={<PricingCardsSkeleton />}>
            <PricingCards />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
