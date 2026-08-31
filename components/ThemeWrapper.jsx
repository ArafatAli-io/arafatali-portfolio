'use client';

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ThemeWrapper({ children }) {
  const { theme } = useTheme(); // now safe, because it's a client component

  return (
    <>
      <div className={`flex justify-center items-center w-full ${theme === 'light'? "" : 'text-white'}`}><Navbar/></div>

      <div className="min-h-screen w-full relative overflow-hidden transition-colors duration-500">
        {/* Background depending on theme */}
        {theme === "light" ? (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(135deg, 
          rgba(248,250,252,1) 0%, 
          rgba(219,234,254,0.7) 30%, 
          rgba(165,180,252,0.5) 60%, 
          rgba(129,140,248,0.6) 100%
        ),
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)
      `,
            }}
          />

        ) : (
          <div
    className="absolute inset-0 -z-10"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />

        )}

        {/* Page content */}
        <div className={`relative ${theme === 'light'? "" : 'text-white'}`}>{children}</div>
      </div>

      <Footer/>
    </>
  );
}