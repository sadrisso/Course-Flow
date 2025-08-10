"use client"
import { useGetUsersQuery } from "@/redux/services/coursesApi";
import React from "react";

function UserPage() {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load users.</p>;
  }

  if (!users || users.length === 0) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                user.role === "admin"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
