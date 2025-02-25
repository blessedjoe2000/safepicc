import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from "@/components/Provider/ToasterProvider";

export const metadata = {
  title: "Safe Picc",
  description: "Providing safe medical picc services",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
