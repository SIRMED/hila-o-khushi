import type { Metadata } from "next";
import gilroy from "@/assets/fonts/FontsManager";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hila-o-Khushi",
    template: "%s | Hila-o-Khushi"
  },
  description: "Helping the uneducated & empowering women for a brighter Pakistan"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={gilroy.className} >
        <Navbar />
        {children}

        <br /><br /><br /><br />
        <Footer />
      </body>
    </html>
  );
}
