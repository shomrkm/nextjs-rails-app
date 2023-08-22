"use client";

import React from "react";
import axios from "@/lib/axios/axios";

// debug
const TestButton = () => {
  const handleClick = async () => {
    try {
      await axios.get("http://localhost:3010/sessions");

      const res = await axios.post("http://localhost:3010/users", {
        provider: "google",
        uid: "116727722188696075205",
        name: "hummels",
        email: "hummels@gmail.com",
      });
      console.log(res);
    } catch (error) {}
  };

  return (
    <button className="p-2 bg-green-300" onClick={handleClick}>
      Auth Test
    </button>
  );
};

export default function Home() {
  return (
    <main className="flex-col min-h-screen w-max">
      <h1 className="text-4xl mb-4">My Test Application</h1>
      <TestButton />
    </main>
  );
}
