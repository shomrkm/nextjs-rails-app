"use client";

import React from "react";
import { DeleteUser } from "./components/Header/DeleteUser/DeleteUser";
import axios from "axios";

const TestButton = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/auth/:provider/callback`,
        {
          provider: "google",
          uid: "116727722188696075203",
          name: "村上翔太朗",
          email: "shochan1985@gmail.com",
        }
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
