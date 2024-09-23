import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art2Cart Starter App",
  description: "Generated by create next app and Art2Cart Sdk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
