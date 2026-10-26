import Link from "next/link";

export default function NotFound() {
  return (
   <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
  <p className="text-7xl font-bold text-blue-600">404</p>

  <h1 className="mt-4 text-2xl font-bold text-foreground">
    Blog Not Found
  </h1>

  <p className="mt-2 text-muted-foreground">
    Sorry, the blog you are looking for does not exist.
  </p>

  <Link
      href="/"
  className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-700"
>
  Back to Home
</Link>
</main>
  );
}