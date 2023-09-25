import { FC } from "react";
import { Event } from "@/types/events";
import { makeStartEndDateString } from "@/utils/makeStartEndDateString";
import Link from "next/link";
import { EditEventButton } from "./EditEventButton";
import { DeleteEvent } from "./DeleteEvent";

type Props = {
  event: Event;
};

export const EventCard: FC<Props> = ({ event }: Props) => {
  return (
    <div className="flex justify-between items-center border border-solid border-gray-400 rounded-md p-2 my-2 hover:bg-blue-100">
      <Link href={`events/${event.id}`}>
        <div className="flex-col justyfy-center w-96">
          <div className="truncate">{event.name}</div>
          <div className="text-sm truncate text-gray-600">
            {makeStartEndDateString(event.start_at, event.end_at)}
          </div>
        </div>
      </Link>
      <div className="flex space-x-2 ml-4 h-8">
        <EditEventButton />
        <DeleteEvent eventId={event.id!} />
      </div>
    </div>
  );
};
