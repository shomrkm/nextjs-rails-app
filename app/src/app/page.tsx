import React, { useCallback } from "react";
import { getSession } from "@/services/server/Sessions";
import { getEvents } from "@/services/server/Events";
import { addEvent } from "@/services/server/Events/addEvent";
import {
  PostTestButton,
  ReloadTestButton,
} from "./components/Header/Buttons/buttons";

type Event = {
  id: string | null;
  name: string;
  place: string;
  start_at: string;
  end_at: string;
  content: string;
};

export default async function Home() {
  await getSession();
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
