import React from "react";
import { getSession } from "@/services/server/Sessions";
import { getEvents } from "@/services/server/Events";
import { getMe } from "@/services/server/Users";
import { Event } from "@/types/events";

export default async function Home() {
  await getSession();
  await getMe();
  const events: Event[] = await getEvents();

  return (
    <main className="flex-col min-h-screen w-max">
      <h1 className="text-4xl mb-4">Events</h1>
      {events.map((ev) => (
        <li key={ev.id}>{ev.name}</li>
      ))}
    </main>
  );
}
