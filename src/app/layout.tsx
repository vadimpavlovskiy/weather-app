'use client';
import { HeaderLayout } from "@/layout/Header/header.layout";
import "./globals.css";
import WeatherProvider from "@/context/weatherContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WeatherProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </WeatherProvider>
  );
}
