import { getEvent } from "@/services/server/Events";
import React, { useMemo } from "react";
import Image from "next/image";
import { makeStartEndDateString } from "@/utils/makeStartEndDateString";
import { JoinEventForm } from "@/components/templates/Events/JoinEventForm";
import { getMe } from "@/services/server/Users";
import { CancelEventButton } from "@/components/templates/Events/CancelEventButton";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const event = await getEvent(params.id);

  const me = await getMe();
  const joinedTicket = me && event.tickets.find((t) => t.user.id === me.id);

  return (
    <main className="flex-col min-h-screen w-max">
      <h1 className="text-4xl mb-4">{event.name}</h1>
      <div className="m-4">
        <h2 className="text-2xl">Event Content</h2>
        <p>{event.content}</p>
      </div>
      <div className="m-4">
        <h2 className="text-2xl">Date and Time</h2>
        <p>{makeStartEndDateString(event.start_at, event.end_at)}</p>
      </div>
      <div className="m-4">
        <h2 className="text-2xl">Place</h2>
        <p>{event.place}</p>
      </div>
      <div className="mb-8 mt-4 mx-4">
        <h2 className="text-2xl mb-2">Owner</h2>
        {event.owner ? (
          <div className="flex justify-start items-center">
            <Image
              className="rounded-full mr-2"
              src={event.owner.image_url}
              alt=""
              width={30}
              height={30}
            />
            <p className="text-gray-600">{event.owner.name}</p>
          </div>
        ) : (
          <p className="text-gray-600">Anonymous</p>
        )}
      </div>
      <div className="border border-solid border-gray-400 border-" />
      <div className="m-4">
        <div className="flex items-center text-center">
          <h2 className="text-2xl mr-8">Join Members</h2>
          {joinedTicket ? (
            <CancelEventButton
              eventId={joinedTicket.event_id}
              ticketId={joinedTicket.id!}
            />
          ) : (
            <JoinEventForm eventId={event.id!} />
          )}
        </div>
        <div className="mt-4">
          {event.tickets.map((t) => (
            <li key={t.id}>{`${t.comment} (${t.user.name})`}</li>
          ))}
        </div>
      </div>
    </main>
  );
}
