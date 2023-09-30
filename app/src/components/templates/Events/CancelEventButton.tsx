"use client";

import { Button } from "@/components/atoms/Button";
import { deleteTicket } from "@/services/client/Events/deleteTicket";
import { useRouter } from "next/navigation";

type Props = {
  eventId: number;
  ticketId: number;
};

export const CancelEventButton = ({ eventId, ticketId }: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    await deleteTicket({ eventId, ticketId });
    router.refresh();
  };
  return (
    <Button size="xs" variant="danger" onClick={handleClick}>
      Cancel Event
    </Button>
  );
};
