"use client";

import React, { FC, useRef } from "react";
import { Button } from "@/components/atoms/Button";
import { useDisclosure } from "@/hooks/useDisclosure";
import { deleteEvent } from "@/services/client/Events/deleteEvent";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { ConfirmationDialog } from "../ConfirmationDialog";

export const DeleteEvent: FC<{ eventId: number }> = ({
  eventId,
}: {
  eventId: number;
}) => {
  const router = useRouter();
  const { close, open, isOpen } = useDisclosure();
  const cancelButtonRef = useRef(null);

  const handleDelete = useCallback(async () => {
    await deleteEvent(eventId);
    close();
    router.refresh();
  }, [eventId, close, router]);

  return (
    <>
      <ConfirmationDialog
        title="Confirmation"
        body="Are you sure you want to delete this event?"
        triggerButton={
          <Button variant="danger" size="xs" onClick={open}>
            Delete
          </Button>
        }
        confirmButton={
          <Button
            type="button"
            variant="danger"
            onClick={handleDelete}
            ref={cancelButtonRef}
          >
            Delete
          </Button>
        }
      />
    </>
  );
};
