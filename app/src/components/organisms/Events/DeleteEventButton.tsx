"use client";

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export const DeleteEventButton = () => {
  const router = useRouter();
  const handleClick = () => {
    // TODO: Delete Event
  };
  return (
    <Button variant="danger" size="xs" onClick={handleClick}>
      Delete
    </Button>
  );
};
