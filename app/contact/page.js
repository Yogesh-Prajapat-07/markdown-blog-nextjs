
export const metadata = {
  title: "Contact | YogiBlog",
  description: "Get in touch with YogiBlog for questions, feedback, and collaboration.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground">
            Have a question about web development or one of our tutorials?
            We would love to hear from you.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Contact YogiBlog</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Whether you have feedback, a suggestion for a tutorial, or an
            idea for collaboration, feel free to reach out.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/about#contact"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Contact Details
            </a>

            <a
              href="/blog"
              className="inline-flex items-center rounded-md border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Explore Blogs
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
