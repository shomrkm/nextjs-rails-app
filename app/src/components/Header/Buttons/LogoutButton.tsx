"use client";

// import { getSession } from "@/services/server/Sessions";
import { logout } from "@/services/server/Sessions/logout";
import { useRouter } from "next/navigation";
import React from "react";

export const LogoutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await logout();
    router.push("/");
  };

  return (
    <button className="p-2 border rounded-md bg-red-200" onClick={handleClick}>
      Logout
    </button>
  );
};
