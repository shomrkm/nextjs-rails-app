"use client";

import React from "react";
import { Heading } from "./Heading/haeding";
import { useSession } from "next-auth/react";
import { LoginButton, LogoutButton } from "./Buttons/buttons";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex bg-gray-100 fixed p-4 top-0 left-0 items-center w-full">
      <Heading />
      <div className="flex items-center">
        {session ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
};
