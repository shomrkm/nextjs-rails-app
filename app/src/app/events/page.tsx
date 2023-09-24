import React from "react";
import { getSession } from "@/services/server/Sessions";
import { getEvents } from "@/services/server/Events";
import { getMe } from "@/services/server/Users";
import { Event } from "@/types/events";
import { AddEventButton } from "../../components/templates/Events/AddEventButton";
import { EventCard } from "@/components/organisms/Events/EventCard";

export default async function Home() {
  await getSession();
  await getMe();
  const events: Event[] = await getEvents();

  return (
    <main className="flex-col min-h-screen w-max">
      <div className="flex justify-start items-center mb-4">
        <h1 className="text-4xl mr-8">Events</h1>
        <AddEventButton />
      </div>
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} />
      ))}
    </main>
  );
}
