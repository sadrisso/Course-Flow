"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import { useGetCoursesQuery } from "@/redux/services/coursesApi";
import { useSession } from "next-auth/react";
import { useGetUsersQuery } from "@/redux/services/usersApi";

const data = [
  { name: "Jan", users: 300 },
  { name: "Feb", users: 500 },
  { name: "Mar", users: 700 },
  { name: "Apr", users: 400 },
  { name: "May", users: 850 },
];

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  const { data: users } = useGetUsersQuery();
  const { data: courses } = useGetCoursesQuery();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row text-gray-800">
      {/* Mobile Navbar */}
      <div className="md:hidden bg-white shadow-md flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">CourseFlow</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-30 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300 transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="text-blue-600 font-semibold">
            Dashboard
          </Link>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="#">Users</Link>
          <a href="#">Instructors</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 mt-4 md:mt-0">
        {/* Topbar */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h2>

          {session?.user?.role === "admin" && (
            <Link href="/add-course">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:shadow-md transition-all duration-200 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add Course
              </button>
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link href="/users">
            <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-xl font-bold">{users?.length}</p>
              </div>
            </div>
          </Link>
          <Link href="/courses">
            <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <p className="text-xl font-bold">{courses?.length}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Users</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
