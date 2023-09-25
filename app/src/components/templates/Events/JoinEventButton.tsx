"use client";

import { Button } from "@/components/atoms/Button";
import { createTicket } from "@/services/client/Events/createTicket";
import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
  eventId: string;
};

export const JoinEventButton: FC<Props> = ({ eventId }) => {
  const router = useRouter();

  const handleClick = async () => {
    // TODO: WIP
    await createTicket({ eventId, comment: "test" });
    router.refresh();
  };

  return (
    <Button size="xs" onClick={handleClick}>
      Join Event
    </Button>
  );
};
