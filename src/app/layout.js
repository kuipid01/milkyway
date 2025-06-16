"use client"; // Mark this as a client component

import { Inter } from "next/font/google";
import "./globals.css";
import MouseClickEffect from "@/components/MouseClickEffect";
import { Toaster } from "react-hot-toast";
import { VolumeProvider } from "@/components/context/VolumeControlContext";

import { metadata } from "./metadata"; 


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      
          <VolumeProvider>
            <div className="relative w-screen h-screen cursor-custom">
              <div className="absolute top-1/2 left-1/2 rotate-90 sm:rotate-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[100vh] h-[100vw] sm:w-screen sm:h-screen">
                <MouseClickEffect />
                {children}
                <Toaster position="bottom-center" />
                <div id="modal"></div>
              </div>
            </div>
          </VolumeProvider>
      
      </body>
    </html>
  );
}