import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Payara Pricing Page",
  description: "Payara Frontend Dev Assignment",
};

const satoshi = localFont({
  src: [
    {
      path: "../fonts/SatoshiMedium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SatoshiBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} font-satoshi antialiased bg-violet-50 dark:bg-gray-800`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
