"use client";

import {
  DateField,
  Form,
  InputField,
  TextareaField,
} from "@/components/organisms/Form";
import { Button } from "@/components/atoms/Button";
import { addEvent } from "@/services/client/Events/addEvent";
import React from "react";
import z from "zod";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  place: string;
  startAt: string;
  endAt: string;
  content: string;
};

const schema = z.object({
  name: z.string().max(50).min(1, "Name is required"),
  place: z.string().max(100),
  content: z.string().max(2000),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
});

export const CreateEventForm = () => {
  const router = useRouter();

  const handleSubmit = async (value: FormValues) => {
    await addEvent({
      name: value.name,
      place: value.place,
      start_at: value.startAt,
      end_at: value.endAt,
      content: value.content,
    });
    router.push("/events");
  };

  return (
    <Form<FormValues, typeof schema>
      id="create-event-form"
      onSubmit={handleSubmit}
      schema={schema}
      className="w-[700px]"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Name"
            error={formState.errors["name"]}
            registration={register("name")}
          />
          <InputField
            label="Place"
            error={formState.errors["place"]}
            registration={register("place")}
          />
          <div className="flex justify-between w-full">
            <DateField
              type="datetime-local"
              label="Start Time"
              error={formState.errors["startAt"]}
              registration={register("startAt")}
              className="w-[330px]"
            />
            <DateField
              type="datetime-local"
              label="End Time"
              error={formState.errors["endAt"]}
              registration={register("endAt")}
              className="w-[330px]"
            />
          </div>
          <TextareaField label="Content" registration={register("content")} />
          <div>
            <Button type="submit" form="create-event-form" className="w-full">
              Create Event
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};
