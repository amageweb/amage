import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - AMAGE Web",
  description: "Conecte-se conosco através de nossos links",
};

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
