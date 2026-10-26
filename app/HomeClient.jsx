

"use client";
import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from "next/link";


export default function HomeClient({ blogs }) {

   const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Programming', 'Designing'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
  });


    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
    

      
<section className="container mx-auto px-4 py-10 sm:px-6 lg:flex lg:items-center lg:gap-10 lg:py-16">
  {/* Hero Content */}
  <div className="w-full text-center lg:w-1/2 lg:text-left">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 sm:text-4xl">
      Learn, Build &amp; Grow with{" "}
      <span className="font-semibold">YogiBlog</span>

      <br className="hidden lg:block" />

      <span className="block mt-2 lg:mt-0">
        Explore{" "}
        <span className="font-semibold underline decoration-primary underline-offset-4">
          <span ref={el} />
        </span>
      </span>
    </h1>

    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500 dark:text-gray-300 sm:text-lg lg:mx-0">
      Explore practical tutorials, coding tips, and guides on React,
      Next.js, JavaScript, and full-stack web development.
      <br className="hidden lg:block" />{" "}
      Learn new skills and build better projects with YogiBlog.
    </p>
  </div>

  {/* Hero Image */}
  <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
    <Image
      src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
      alt="Web developer working on website design"
      className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
      width={448}
      height={300}
      priority
    />
  </div>
</section>

    





      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
          <div className="mx-auto mb-12 max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            What You’ll Learn at YogiBlog
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Discover what makes our platform stand out and how it can benefit you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
               Modern Web Development
              </h3>
              <p className="font-light text-gray-600 dark:text-gray-400 text-center">
               Learn React, Next.js, JavaScript, and modern frontend development techniques.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-4 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
               Practical Coding Tutorials
              </h3>
              <p className="font-light text-gray-600 dark:text-gray-400 text-center">
               Follow step-by-step guides, coding examples, and useful developer tips.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
               Full Stack Development
              </h3>
              <p className="font-light text-gray-600 dark:text-gray-400 text-center">
               Explore Node.js, Express, MongoDB, APIs, and backend development.
              </p>
            </div>
          </div>
        </div>
      </section>


 <section className="bg-gray-50 dark:bg-gray-900 py-16">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
    {/* Section Header */}
    <div className="mx-auto mb-10 max-w-screen-md text-center">
      <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
        Our Top Blogs
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        Dive into our latest insights and articles, crafted just for you.
      </p>
    </div>

 
  {/* Blog Cards Grid */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-gray-900 transition-colors duration-300 group-hover:text-[#00c781] dark:text-white">
  {blogs.slice(0, 3).map((blog) => (
    <article
      key={blog.slug}
     className="group min-w-0 rounded-xl  p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] bg-gray-100 border border-gray-200  hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
    >
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {blog.category}
        </p>
<h3 className="line-clamp-2 text-2xl font-semibold text-gray-800 dark:text-white">
  <Link
    href={`/blogpost/${blog.slug}`}
    className="transition-colors duration-300 hover:text-blue-600  dark:hover:text-blue-400"
  >
    {blog.title}
  </Link>
</h3>
        <p className="mt-3 line-clamp-3 flex-grow text-gray-600 dark:text-gray-400">
          {blog.description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blogpost/${blog.slug}`}
          className="text-blue-500 transition-colors duration-300 hover:text-blue-400"
          >
           Explore topics →
          </Link>
        </div>
      </div>
    </article>
  ))}
</div>
  </div>
</section>

    </main>
  );

}
















