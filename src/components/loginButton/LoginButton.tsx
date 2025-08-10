"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn()}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
    >
      Sign in
    </button>
  );
}
