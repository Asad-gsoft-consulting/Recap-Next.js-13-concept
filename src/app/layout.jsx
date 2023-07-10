import Navbar from "@/components/Navbar";
import "./globals.css";
import {Inter, Poppins} from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});
const poppin = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "GSoft",
  description: "Global Software Consultig",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <main className="container-fluid">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
