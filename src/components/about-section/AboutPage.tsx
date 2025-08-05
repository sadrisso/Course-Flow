import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../navbar/Navbar";

const teamMembers = [
  {
    name: "Shoeb Akter Drisso",
    role: "Founder & Developer",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Sarah Hossain",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Jamal Uddin",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      {/* Header Section */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About EduTrack</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          EduTrack is your smart companion for managing online education. Built
          for instructors, students, and administrators who want a seamless
          learning experience.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our mission is to empower educators and learners through simple,
          powerful, and modern tools. We believe education should be accessible
          and manageable for everyone — from individual instructors to growing
          institutions.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Meet the Team</h2>
          <p className="text-gray-600 mt-2">
            Passionate people behind the product
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
            >
              <Image
                width={100}
                height={100}
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience EduTrack?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Start managing your courses smarter — try EduTrack now and transform
          your online education.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
