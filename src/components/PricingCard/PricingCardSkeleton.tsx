import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const PricingCardSkeleton = ({ primary }: { primary?: boolean }) => {
  return (
    <Card
      className={cn(
        "w-full lg:w-1/3 py-10 border-none",
        primary &&
          "py-[70px] bg-violet-700 text-violet-50 dark:text-gray-100 shadow-lg z-10 -my-16 lg:my-0 lg:-mx-4",
        !primary &&
          "my-[30px] bg-violet-100 dark:bg-gray-700 text-violet-950 dark:text-violet-50",
      )}
    >
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-full h-8" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-full h-8" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-[44px] mt-6" />
      </CardContent>
      <CardFooter className="flex-col items-start gap-3 mt-10">
        {[...Array(8)].map((_, index) => (
          <div
            key={`skeleton-item-${index}`}
            className="flex items-center gap-4 w-full"
          >
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-full h-8" />
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PricingCardSkeleton;
