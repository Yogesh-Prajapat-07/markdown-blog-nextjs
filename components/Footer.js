
import Link from "next/link";



export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3 text-center">
        <span className="text-lg font-bold text-purple-600">
       YogiBlog
        </span>

        <p className="mt-1 text-xs text-muted-foreground">
          © {new Date().getFullYear()}  All rights reserved.
        </p>
      </div>
    </footer>
  );
}

