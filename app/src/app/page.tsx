"use client";

import React from "react";
import { DeleteUser } from "./components/Header/DeleteUser/DeleteUser";
import axios from "@/lib/axios/axios";

// debug
const TestButton = () => {
  const handleClick = async () => {
    try {
      await axios.get("http://127.0.0.1:3010/sessions");

      const response = await axios.post(
        `http://127.0.0.1:3010/auth/google_oauth2`
      );

      console.log("=======OK===========");
      console.log(response);
    } catch (error) {
      console.log("=======NG===========");
    }
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
      <DeleteUser />
      <TestButton />
    </main>
  );
}
