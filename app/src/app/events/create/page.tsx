import { CreateEventForm } from "@/components/templates/CreateEvent";
import React from "react";

export default async function Page() {
  return (
    <main className="flex-col min-h-screen w-max">
      <h1 className="text-4xl mb-4">Create Event</h1>
      <CreateEventForm />
    </main>
  );
}
