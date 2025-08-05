import Image from "next/image";
import React from "react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar?: string; // Optional avatar URL
}

const testimonials: Testimonial[] = [
  {
    name: "Amina Rahman",
    role: "Course Instructor",
    message:
      "EduTrack made managing my classes so easy. I love how clean and intuitive the interface is!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rafiul Hasan",
    role: "Student",
    message:
      "It’s the best platform I’ve used for learning. Enrolling and tracking progress was a breeze.",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
  {
    name: "Sadia Noor",
    role: "Admin",
    message:
      "The dashboard features saved me hours every week. Highly recommend it for any learning platform!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What People Are Saying
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by instructors, students, and admins around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-gray-700 mb-4 text-sm italic">
              “{testimonial.message}”
            </p>
            <div className="flex items-center gap-4 mt-4">
              {testimonial.avatar && (
                <Image
                  width={100}
                  height={100}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-base font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
