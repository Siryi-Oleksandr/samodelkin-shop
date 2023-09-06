import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samodelkin Shop",
  description: "Інтернет магазин продажу іграшок ручної роботи",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
