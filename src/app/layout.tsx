import type { Metadata } from "next";
import "./globals.css";
import LandingHeader from "@/components/Molecules/LandingHeader";
import Footer from "@/components/Molecules/Footer";

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
      <body className="flex flex-col min-h-screen overflow-scroll overflow-x-hidden">
        <LandingHeader />
        <section className="flex flex-grow flex-col pl-10 pr-10">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
