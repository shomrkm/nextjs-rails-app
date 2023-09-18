"use client";

import { DateField, Form, InputField, TextareaField } from "@/components/Form";
import { Button } from "@/components/atoms/Button";
import { addEvent } from "@/services/client/Events/addEvent";
import React from "react";
import z from "zod";

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
  return (
    <Form<FormValues, typeof schema>
      id="create-event-form"
      onSubmit={async (value) => {
        await addEvent({
          name: value.name,
          place: value.place,
          start_at: value.startAt,
          end_at: value.endAt,
          content: value.content,
        });
      }}
      schema={schema}
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
          <DateField
            type="datetime-local"
            label="Start Time"
            error={formState.errors["startAt"]}
            registration={register("startAt")}
          />
          <DateField
            type="datetime-local"
            label="End Time"
            error={formState.errors["endAt"]}
            registration={register("endAt")}
          />
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
