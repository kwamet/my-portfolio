import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kwame Trancoso",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={inter.className}>{children}</main>
    </>
  );
}

