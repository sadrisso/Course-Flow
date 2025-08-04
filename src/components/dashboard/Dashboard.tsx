"use client"
import React, { useState } from "react";
import { BarChart3, BookOpen, Users, Settings, Menu, X } from "lucide-react";
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

const stats = [
  {
    title: "Total Courses",
    value: 24,
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Enrolled Students",
    value: 842,
    icon: <Users className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Active Instructors",
    value: 12,
    icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Settings",
    value: "Manage",
    icon: <Settings className="h-6 w-6 text-yellow-500" />,
  },
];

const data = [
  { name: "Jan", users: 300 },
  { name: "Feb", users: 500 },
  { name: "Mar", users: 700 },
  { name: "Apr", users: 400 },
  { name: "May", users: 850 },
];

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row text-gray-800">
      {/* Mobile Navbar */}
      <div className="md:hidden bg-white shadow-md flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">EduTrack</h1>
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
        <h2 className="text-2xl font-bold mb-8 hidden md:block"><Link href="/">EduTrack</Link></h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="text-blue-600 font-semibold">
            Dashboard
          </a>
          <a href="#">Courses</a>
          <a href="#">Students</a>
          <a href="#">Instructors</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 mt-4 md:mt-0">
        {/* Topbar */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Add Course
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4"
            >
              <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
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
