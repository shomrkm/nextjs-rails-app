import React from "react";
import { getSession } from "@/services/server/Sessions";
import { getMyEvents } from "@/services/server/Events";
import { Event } from "@/types/events";
import { AddEventButton } from "@/components/templates/Events/AddEventButton";
import { EventCard } from "@/components/organisms/Events";

export default async function Home() {
  await getSession();
  const events: Event[] = await getMyEvents();

  return (
    <main className="flex-col min-h-screen mx-4">
      <div className="flex flex-wrap justify-start items-center mb-4">
        <h1 className="text-4xl mr-8">Events</h1>
        <AddEventButton />
      </div>
      <div className="flex flex-wrap gap-2">
        {events.map((ev) => (
          <EventCard key={ev.id} event={ev} canUpdate />
        ))}
      </div>
    </main>
  );
}
