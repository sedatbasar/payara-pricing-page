import { PricingCard } from "@/components/PricingCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="container mx-auto relative">
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
          {PP.map((pricing) => (
            <PricingCard key={pricing.title} {...pricing} />
          ))}
        </div>
      </main>
    </div>
  );
}

const PP = [
  {
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: "0",
    supportedFeatures: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
    ],
    unsupportedFeatures: [
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
  },
  {
    primary: true,
    title: "Professional",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    price: "25",
    supportedFeatures: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
    ],
    unsupportedFeatures: [
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams. ",
    price: "100",
    supportedFeatures: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
  },
];
