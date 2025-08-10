"use client";
import LogoutButton from "@/components/logoutButton/LogoutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <div className="flex items-center gap-6">
          {/* Profile Picture */}
          <Image
            width={100}
            height={100}
            src={session.user?.image || "/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Basic Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {session.user?.name}
            </h1>
            <p className="text-gray-600">{session.user?.email}</p>
            {session.user?.role && (
              <span className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                {session.user.role}
              </span>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Account Details
          </h2>
          <div className="flex justify-between text-gray-700">
            <span>Member since:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Account Status:</span>
            <span className="text-green-600 font-semibold">Active</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>

          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
