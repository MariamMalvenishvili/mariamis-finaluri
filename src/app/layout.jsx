import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MARIAMI",
  description: "Created By Mariami",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"container"}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
