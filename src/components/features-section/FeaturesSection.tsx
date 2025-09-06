"use client";
import React from "react";
import { BookOpenCheck, Users, Settings, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Course Management",
    description:
      "Easily create, update, and organize your courses in a few clicks.",
    icon: <BookOpenCheck className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Student Enrollment",
    description: "Track and manage student registrations and progress.",
    icon: <Users className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Get real-time stats about user engagement and performance.",
    icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Admin Controls",
    description:
      "Fine-tune settings and manage roles with powerful admin tools.",
    icon: <Settings className="h-6 w-6 text-yellow-600" />,
  },
];

const FeaturesSection: React.FC = () => {
  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
  ];

  return (
    <section
      id="features"
      className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Powerful Features to Grow Your Learning Journey
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage your courses and students with ease.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`rounded-xl shadow-md p-6 text-center hover:shadow-lg transition ${
              colors[index % colors.length]
            }`}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
