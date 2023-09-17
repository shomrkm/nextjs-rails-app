import React from "react";
import { Heading } from "./Heading/haeding";
import { GoogleAuthButton } from "./Buttons/GoogleAuthButton";
import { getMe } from "@/services/server/Users";
import Image from "next/image";
import { LogoutButton } from "./Buttons/LogoutButton";

export const Header = async () => {
  const me = await getMe();

  return (
    <header className="flex bg-gray-100 fixed p-4 top-0 left-0 items-center w-full">
      <Heading />
      <div className="flex items-center">
        {me ? (
          <>
            <div className="flex justify-end items-center">
              <p className="text-gray-600">test@gmail</p>
              <Image
                className="rounded-full mx-4"
                src={me.image_url}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <LogoutButton />
          </>
        ) : (
          <GoogleAuthButton />
        )}
      </div>
    </header>
  );
};
