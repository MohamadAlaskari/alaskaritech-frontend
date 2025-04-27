import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";



export const metadata: Metadata = {
  title: "Alaskari Tech.",
  description: "Alaskari Tech. – Professionelle Webseiten, Branding und IT-Lösungen. Maßgeschneiderte Webentwicklung für Unternehmen, Praxen und Organisationen und mehr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-white text-black font-sans">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
