"use client";

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export const AddEventButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/events/create");
  };
  return (
    <Button size="xs" onClick={handleClick}>
      Add Event
    </Button>
  );
};
