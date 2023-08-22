"use client";

import React from "react";
import { Heading } from "./Heading/haeding";
import { LoginButton, LogoutButton } from "./Buttons/buttons";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex bg-gray-100 fixed p-4 top-0 left-0 items-center w-full">
      <Heading />
      <div className="flex items-center">
        <div className="flex justify-end items-center">
          <p className="text-gray-600">test@gmail</p>
          {/* <Image
              className="rounded-full mx-4"
              src={session.user?.image!}
              alt=""
              width={40}
              height={40}
            /> */}
          <LogoutButton />
        </div>
        {/* <LoginButton /> */}
      </div>
    </header>
  );
};
