import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
   process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  
   verification: {
    google: "sVUlt31Gb9Ces4PbuspB_V1Fa4kEsPbxrOrBRAK9IhY" ,
  },

  
title: {
default: "YogiBlog | Developer Blog",
template: "%s | YogiBlog",
},
description:
"Explore programming tutorials, web development guides, and technology articles on YogiBlog.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className="scroll-p-20 scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
         <main className="min-h-screen">
  {children}
</main>

<Footer />
        </ThemeProvider>
        
      </body>
    </html>
   
  );
}