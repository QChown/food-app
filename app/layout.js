import Link from "next/link";
import "./globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainHeaderBg from "@/components/MainHeader/MainHeaderBg";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
