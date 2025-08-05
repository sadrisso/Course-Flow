import React from "react";
import { BookOpenCheck, Users, Settings, BarChart3 } from "lucide-react";


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
  return (
    <section id="features" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Powerful Features to Grow Your Learning Journey
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage your courses and students with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
