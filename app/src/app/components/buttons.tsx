"use client";
import React from "react";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="mr-2 p-2 border rounded-md bg-blue-200"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="mr-2 p-2 border rounded-md bg-red-200"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
