import React from "react";
import axios from "@/lib/axios/axios";

type Event = {
  id: string | null;
  name: string;
  place: string;
  start_at: string;
  end_at: string;
  content: string;
};

async function getSession() {
  try {
    await axios.get(`/sessions`);
  } catch (err) {
    throw Error("Failed to getSession");
  }
}

async function getData() {
  const res = (await axios.get(`/events`)) as any;
  if (!res.status) {
    throw Error("Failed to fetch data");
  }

  return res.data;
}

export default async function Home() {
  await getSession();
  const events: Event[] = await getData();

  return (
    <main className="flex-col min-h-screen w-max">
      <h1 className="text-4xl mb-4">Events</h1>
      {events.map((ev) => (
        <li key={ev.id}>{ev.name}</li>
      ))}
    </main>
  );
}
