"use client";

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export const EditEventButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("events/edit");
  };
  return (
    <Button variant="inverse" size="xs" onClick={handleClick}>
      Edit
    </Button>
  );
};
