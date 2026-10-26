import { Link as LinkIcon } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import fs from "fs";
import grayMatter from "gray-matter";
import { buttonVariant, buttonVariants } from '@/components/ui/button';
import BlogSearch from "@/components/BlogSearch";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const filecontent = fs.readFileSync(`content/${file}`, "utf-8")
  const { data } = grayMatter(filecontent)
  return data
})



const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className=" rounded-lg shadow-lg overflow-hidden dark:border-2">
            <div className="flex flex-1 flex-col p-5">
            <img src={blog.image} alt={blog.title} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h2 className="line-clamp-2 text-xl font-bold leading-tight">{blog.title}</h2>
              <p className="mt-3 line-clamp-3 ">{blog.description}</p>
              <div className=" mt-3 text-sm">
                <span>{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</span>
              </div>
              <div className='mt-auto pt-4'>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}> Click here
                </Link>
              </div>


            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
