
export const metadata = {
  title: "About Me | YogiBlog",
  description:
    "I'm Yogesh Prajapat, a B.Tech IT student learning MERN Stack and Next.js to become a Full Stack Developer.",
};

const skills = [
  {
    name: "Next.js",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    name: "React",
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  {
    name: "Tailwind CSS",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  },
  
  {
    name: "Shadcn/ui",
    color:
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
  {
    name: "Database Management",
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    name: "Node.js",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
  {
    name: "Express.js",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    name: "MongoDB",
    color:
      "bg-lime-100 text-lime-800 dark:bg-lime-500/20 dark:text-lime-300",
  },
  {
    name: "Git & GitHub",
    color:
      "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-16">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Introduction */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
              YP
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Hello, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Yogesh Prajapat
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              I&apos;m a B.Tech IT student passionate about web development.
              I&apos;m learning the MERN Stack and Next.js to become a Full
              Stack Developer. I enjoy building projects and learning new
              technologies.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#skills"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                My Skills
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:hover:text-blue-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* My Journey */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            My Journey
          </h2>

          <div className="mt-5 space-y-4 leading-8 text-slate-600 dark:text-slate-400">
            <p>
              I&apos;m pursuing a B.Tech in Information Technology and
              developing my web development skills through practical projects.
            </p>

            <p>
              My focus is on React, Next.js, and the MERN Stack. I want to
              improve my frontend and backend skills, build useful
              applications, and grow as a Full Stack Developer.
            </p>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section
          id="skills"
          className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h2 className="border-b-2 border-green-400 pb-3 text-3xl font-bold">
            Skills &amp; Technologies
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`rounded-full px-5 py-3 text-base font-semibold shadow-md transition duration-200 hover:-translate-y-1 ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* About YogiBlog */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            About YogiBlog
          </h2>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
            YogiBlog is my personal blogging platform where I share articles,
            ideas, and useful information. Building this project helps me
            practice Next.js, React, Tailwind CSS, and Markdown-based content
            management.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind CSS", "Markdown", "Vercel"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>

        {/* Contact & GitHub */}
        <section
          id="contact"
          className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
            I&apos;m interested in connecting with developers, collaborating
            on projects, and exploring Full Stack Development internships
            and opportunities.
          </p>

          <a
            href="https://github.com/Yogesh-Prajapat-07"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            Connect on GitHub ↗
          </a>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Built with passion by Yogesh Prajapat · YogiBlog
        </footer>

      </div>
    </main>
  );
}
