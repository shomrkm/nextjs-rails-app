"use client";

import { Button } from "@/components/atoms/Button";
import { deleteEvent } from "@/services/client/Events/deleteEvent";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const DeleteEventButton = ({ eventId }: { eventId: string }) => {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    await deleteEvent(eventId);
    router.refresh();
  }, [eventId, router]);

  return (
    <Button variant="danger" size="xs" onClick={handleClick}>
      Delete
    </Button>
  );
};
