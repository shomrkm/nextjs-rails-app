"use client";

import { DateField, Form, InputField, TextareaField } from "@/components/Form";
import { Button } from "@/components/atoms/Button";
import React from "react";
import z from "zod";

type FormValues = {
  name: string;
  place: string;
  startTime: string;
  endTime: Date;
  content: Date;
};

const schema = z.object({
  name: z.string().max(50).min(1, "Name is required"),
  place: z.string().max(100),
  content: z.string().max(2000),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
});

export const CreateEventForm = () => {
  return (
    <Form<FormValues, typeof schema>
      id="create-event-form"
      onSubmit={(value) => {
        // TODO:リクエストを送る
        console.log(value);
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
            error={formState.errors["startTime"]}
            registration={register("startTime")}
          />
          <DateField
            type="datetime-local"
            label="End Time"
            error={formState.errors["endTime"]}
            registration={register("endTime")}
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
