import { FC } from "react";
import { Event } from "@/types/events";
import { makeStartEndDateString } from "@/utils/makeStartEndDateString";
import Link from "next/link";
import { EditEventButton } from "./EditEventButton";
import { DeleteEvent } from "./DeleteEvent";

type Props = {
  event: Event;
  canUpdate?: boolean;
};

export const EventCard: FC<Props> = ({ event, canUpdate = false }: Props) => {
  return (
    <div className="flex-col justify-between items-center bg-gray-100 border border-solid border-gray-200 w-[300px] rounded-md p-4 my-2 overflow-hidden hover:bg-blue-100">
      <Link href={`/events/${event.id}`}>
        <div className="flex-col justyfy-center w-96">
          <div className="truncate text-lg">{event.name}</div>
          <div className="text-sm truncate text-gray-500">
            {makeStartEndDateString(event.start_at, event.end_at)}
          </div>
        </div>
      </Link>
      {canUpdate && (
        <div className="flex space-x-2 mt-4">
          <EditEventButton />
          <DeleteEvent eventId={event.id!} />
        </div>
      )}
    </div>
  );
};
