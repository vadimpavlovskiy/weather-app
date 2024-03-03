'use client';

import Provider from "@/components/ThemeProvider/themeProvider";
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
          <Provider><body>{children}</body></Provider>
      </html>
    </WeatherProvider>
  );
}
