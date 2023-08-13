"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const DeleteUser = () => {
  const { data: session } = useSession();

  const handleDeleteUser = async () => {
    if (!session?.user) {
      console.error("Session is not exits");
      return;
    }

    try {
      const response = await axios.delete(
        `${API_URL}/users/${session.user.email}`
      );
      if (response.status !== 204) {
        console.error("Failed to delete account");
        return;
      }
      signOut();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (!session) null;

  return (
    <button
      className="mr-2 p-2 border rounded-md bg-blue-200"
      onClick={() => handleDeleteUser()}
    >
      Delete Account
    </button>
  );
};
