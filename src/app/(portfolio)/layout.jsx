import localFont from "next/font/local";
import PortfolioBot from "../../chatbot/PortfolioBot";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../globals.css";

// Load local fonts
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata = {
  title: "The Bee Blessing",
  description: "Generated by create next app",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>

        <Footer />
        <PortfolioBot />
      </body>
    </html>
  );
}
