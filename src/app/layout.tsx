import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { MotionShell } from "@/components/Motion";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Belfa Muhammad · Premium websites, designed by a marketer",
  description:
    "Web designer with 6–7 years in marketing and branding. Websites that look premium and get people to book, buy or get in touch. Based in Indonesia, working with clients worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionShell>{children}</MotionShell>
      </body>
    </html>
  );
}
