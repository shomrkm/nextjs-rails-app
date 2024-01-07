import React from "react";
import { getTasks } from "@/services/server/Tasks/getTasks";
import { Task } from "@/lib/repositories/types/task";

export default async function Page() {
  const tasks: Task[] = await getTasks();

  return (
    <main className="flex-col min-h-screen w-max mx-4">
      <h1 className="text-4xl mr-8 mb-4">Tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li key={t.no}>{`#${t.no} ${t.title}`}</li>
        ))}
      </ul>
    </main>
  );
}
