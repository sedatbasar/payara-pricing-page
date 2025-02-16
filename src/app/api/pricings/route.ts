export async function GET() {
  return Response.json({
    pricings: [
      {
        title: "Freebie",
        description:
          "Ideal for individuals who need quick access to basic features.",
        monthlyPrice: "0",
        yearlyPrice: "0",
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
        monthlyPrice: "25",
        yearlyPrice: "260",
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
        monthlyPrice: "100",
        yearlyPrice: "1000",
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
    ],
  });
}
