"use client";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react"; 
import React from "react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-lg hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-200"
    >
      <LogOut className="w-5 h-5" />
      Logout
    </button>
  );
}
