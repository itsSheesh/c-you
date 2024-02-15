import "./globals.css";
import localFont from "next/font/local"
const myFont = localFont({src: '../assets/font/BYekan+.ttf'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${myFont.className}`}>{children}</body>
    </html>
  );
}
