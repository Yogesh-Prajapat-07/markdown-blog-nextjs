"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Hamicon } from "lucide-react"
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from "./theme-btn";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {

  const [progress, setProgress] = useState(0);
  const pathname = usePathname()
  useEffect(() => {
    setProgress(30)
    setTimeout(() => {
      setProgress(70)
    }, 100)

    setTimeout(() => {
      setProgress(100)
    }, 400)



  }, [pathname])



  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 500)
  }, [])


  return (
    <nav className=" p-4 bg-background/50 sticky top-0  backdrop-blur border-b z-10   ">
      <LoadingBar
        color="oklch(0.62 0.26 305.32)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between  items-center">
        <Link href="/" className=" text-2xl font-bold">YogiBlog</Link>


        <div className=" hidden md:flex  space-x-6 items-center">
          <ul className=" md:flex md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 items-center">
            <li><Link href="/" className="hover:scale-105 font-semibold transition-transform duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:scale-105 font-semibold transition-transform duration-300">About</Link></li>
            <li><Link href="/blog" className="hover:scale-105 font-semibold transition-transform duration-300">Blog</Link></li>
            <li>
              <Link
                href="/blog/search"
                aria-label="Search blogs"
                title="Search blogs"
                className="flex items-center hover:scale-110 transition-transform duration-300"
              >
                <Search size={20} />
              </Link>
            </li>
            <div className="flex ">



              <ModeToggle />
            </div>
          </ul>
        </div>


        <div className=" flex items-center gap-2 md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>

              <button className=" ">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  (  <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> )
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">YogiBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 items-center">
                    <ul className=" md:flex md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 items-center">
                      <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                      <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
                      <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
                      <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
                      <li>
  <Link
    href="/blog/search"
    className="flex items-center gap-2 hover:text-blue-300"
  >
    <Search size={18} />
    Search Blogs
  </Link>
</li>
                     
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
