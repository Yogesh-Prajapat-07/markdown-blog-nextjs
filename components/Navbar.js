
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import LoadingBar from "react-top-loading-bar";

import { ModeToggle } from "./theme-btn";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    const timer1 = setTimeout(() => setProgress(70), 100);
    const timer2 = setTimeout(() => setProgress(100), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 p-4 backdrop-blur-md">
      <LoadingBar
        color="oklch(0.62 0.26 305.32)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          YogiBlog
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                 className={`font-medium transition-colors duration-200 hover:text-purple-500 ${
  pathname === link.href
    ? "text-purple-500"
    : "text-foreground"
}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/blog/search"
                aria-label="Search blogs"
                title="Search blogs"
                className="flex items-center transition-colors hover:text-purple-400"
              >
                <Search size={20} />
              </Link>
            </li>

            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

 <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold">
                  YogiBlog
                </SheetTitle>
              </SheetHeader>

              <ul className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                       className={`block rounded-md px-4 py-3 font-medium transition-colors duration-200 hover:bg-purple-500/10 hover:text-purple-500 ${
  pathname === link.href
    ? "bg-purple-500/10 text-purple-500"
    : "text-foreground"
}`}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}

                <li>
                  <SheetClose asChild>
                    <Link
                      href="/blog/search"
                     className="flex items-center gap-3 rounded-md px-4 py-3 font-medium transition-colors duration-200 hover:bg-purple-500/10 hover:text-purple-500"
                    >
                      <Search size={18} />
                      Search Blogs
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
