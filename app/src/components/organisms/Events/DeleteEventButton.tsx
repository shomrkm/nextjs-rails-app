"use client";

import React, { FC, useRef } from "react";
import { Button } from "@/components/atoms/Button";
import { useDisclosure } from "@/hooks/useDisclosure";
import { deleteEvent } from "@/services/client/Events/deleteEvent";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Dialog, DialogTitle } from "@/components/molecules/Dialog/Dialog";

type ConfirmDialogProps = {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
};

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  onCancel,
  onDelete,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Dialog isOpen={isOpen} onClose={onCancel} initialFocus={cancelButtonRef}>
        <div className="inline-block overflow-hidden px-4 pt-5 pb-4 text-left bg-white rounded-lg shadow-xl transition-all transform">
          <div className="mt-3 text-center my-4">
            <DialogTitle
              as="h3"
              className="text-xl text-left font-medium leading-6 text-gray-900"
            >
              Confirmation
            </DialogTitle>
            <p className="my-5 text-left ml-2">
              Are you sure you want to delete this event?
            </p>
          </div>
          <div className="flex space-x-2 justify-end">
            <Button type="button" onClick={onCancel} ref={cancelButtonRef}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={onDelete}
              ref={cancelButtonRef}
            >
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const DeleteEventButton = ({ eventId }: { eventId: string }) => {
  const router = useRouter();
  const { close, open, isOpen } = useDisclosure();

  const handleDelete = useCallback(async () => {
    await deleteEvent(eventId);
    close();
    router.refresh();
  }, [eventId, close, router]);

  return (
    <>
      <ConfirmDialog onCancel={close} onDelete={handleDelete} isOpen={isOpen} />
      <Button variant="danger" size="xs" onClick={open}>
        Delete
      </Button>
    </>
  );
};
