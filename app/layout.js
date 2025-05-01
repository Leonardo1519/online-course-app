import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNavigation from "./components/BottomNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "在线课程应用",
  description: "移动端在线教育应用",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-md mx-auto h-screen flex flex-col">
          <div className="flex-1 overflow-y-auto pb-16">
            {children}
          </div>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
