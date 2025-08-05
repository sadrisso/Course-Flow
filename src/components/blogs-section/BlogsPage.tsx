import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

interface Blog {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Launch Your First Online Course",
    summary:
      "Learn how to create, structure, and publish your course to start sharing your knowledge online.",
    author: "Shoeb Akter Drisso",
    date: "August 1, 2025",
    imageUrl: "https://i.ibb.co/QmynWdz/blog1.jpg",
    slug: "/blogs/launch-your-first-course",
  },
  {
    id: 2,
    title: "10 Tips for Managing Students Efficiently",
    summary:
      "From tracking progress to handling feedback — tips every instructor needs to manage students better.",
    author: "Sarah Hossain",
    date: "July 28, 2025",
    imageUrl: "https://i.ibb.co/tcKz2pj/blog2.jpg",
    slug: "/blogs/manage-students-efficiently",
  },
  {
    id: 3,
    title: "What Makes a Great Online Learning Platform",
    summary:
      "Explore the essential features and tools your platform must have to deliver effective education.",
    author: "Jamal Uddin",
    date: "July 20, 2025",
    imageUrl: "https://i.ibb.co/9N2zwY3/blog3.jpg",
    slug: "/blogs/great-learning-platform",
  },
];

const BlogsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Latest Blogs
          </h1>
          <p className="mt-4 text-gray-600">
            Insights, tutorials, and tips to help you grow in online education.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <Link
              href={blog.slug}
              key={blog.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  By {blog.author} • {blog.date}
                </p>
                <p className="text-gray-600 mt-3 text-sm">{blog.summary}</p>
                <span className="inline-block mt-4 text-blue-600 text-sm font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
