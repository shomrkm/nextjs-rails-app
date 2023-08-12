import React from "react";
import Link from "next/link";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

export const Heading = () => {
  return (
    <h1 className="flex-grow items-center justify-center text-2xl">
      <Link href={`/`} legacyBehavior>
        <a className="flex items-center">
          <span className="flex justify-center w-12 h-12 mr-4 bg-transparent">
            <PuzzlePieceIcon className="text-green-500" />
          </span>
          Test App
        </a>
      </Link>
    </h1>
  );
};
