import type { Metadata } from "next";
import "./globals.css";
import LandingHeader from "@/components/Molecules/LandingHeader";

export const metadata: Metadata = {
  title: "LearnToLearn",
  description: "Your learning journey begins here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <LandingHeader />
        <section className="flex-grow flex-col">{children}</section>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
