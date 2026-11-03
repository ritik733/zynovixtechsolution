import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Changes Report | Zynovix Tech Solutions",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ChangesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
