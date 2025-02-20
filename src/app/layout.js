import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Linux Klub</title>
      </head>
      <body
        className={jetBrainsMono.className}
      >
        {children}
      </body>
    </html>
  );
}
