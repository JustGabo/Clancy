import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twenty One Pilos",
  description: "Dedicated to Twenty One Pilots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
