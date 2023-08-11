"use client";

import React from "react";

import { auth } from "@/services/client/Auth";

export default function Home() {
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await auth();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl">My Test Application</h1>
      <button
        className="bg-blue-200  p-2 mt-2 rounded-md border-solid border-gray-500"
        onClick={handleLogin}
      >
        Login with Github
      </button>
    </main>
  );
}
