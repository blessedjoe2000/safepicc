import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Safe Picc",
  description: "Providing safe medical picc services",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Toaster position="top-right" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
