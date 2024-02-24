import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

const roboto = Roboto({ subsets: ["latin"], weight: ["400","500","700"]})

export const metadata: Metadata = {
  title: "Generation Lab",
  description: "Take home project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
