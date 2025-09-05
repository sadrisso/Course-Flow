"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn()}
      className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
    >
      Sign in
    </button>
  );
}
