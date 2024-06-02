import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
