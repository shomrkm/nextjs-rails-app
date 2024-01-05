import React from "react";
import { getSession } from "@/services/server/Sessions";
import { getEvents } from "@/services/server/Events";
import { Event } from "@/types/events";
import { EventCard } from "@/components/organisms/Events";

export default async function Home() {
  await getSession();
  const events: Event[] = await getEvents();

  return (
    <main className="flex-col min-h-screen w-max mx-4">
      <h1 className="text-4xl mr-8 mb-4">Events</h1>
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} />
      ))}
    </main>
  );
}
