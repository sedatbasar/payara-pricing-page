export async function GET() {
  return Response.json({
    pricings: [
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
    ],
  });
}
