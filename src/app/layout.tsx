import type { Metadata } from "next";
import { dfvnGldDisplay, beVietnamPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Việt Nam Tinh Hoa",
  description: "Buổi Hoà Nhạc Việt Nam Tinh Hoa - Aria Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${dfvnGldDisplay.variable} ${beVietnamPro.variable}`}>
        {children}
      </body>
    </html>
  );
}