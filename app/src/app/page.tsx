import { getMe } from "@/services/server/Users";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const me = await getMe();
  const name = me?.name ?? "Anonymous";

  return (
    <>
      <h1 className="text-4xl mb-4">{`Hello ${name}`}</h1>
      <Link href="events" className="text-gray-700 text-xl">
        <li>All Events</li>
      </Link>
      {me && (
        <Link href="events/me" className="text-gray-700 text-xl">
          <li>Your Events</li>
        </Link>
      )}
    </>
  );
}
