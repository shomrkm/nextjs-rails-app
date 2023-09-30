"use client";

import { Button } from "@/components/atoms/Button";
import { Form, InputField, TextareaField } from "@/components/organisms/Form";
import { createTicket } from "@/services/client/Events/createTicket";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { z } from "zod";

type Props = {
  eventId: string;
};

type FormValues = {
  comment: string;
};

const schema = z.object({
  comment: z.string().max(100),
});

export const JoinEventForm: FC<Props> = ({ eventId }) => {
  const router = useRouter();

  const handleSubmit = async (value: FormValues) => {
    await createTicket({ eventId, comment: value.comment });
    router.refresh();
  };

  return (
    <>
      <Form<FormValues, typeof schema>
        id="join-event-form"
        onSubmit={handleSubmit}
        schema={schema}
      >
        {({ register, formState }) => (
          <div className="flex  justify-center items-center space-x-2">
            <InputField registration={register("comment")} />
            <Button
              type="submit"
              size="xs"
              form="join-event-form"
              className="h-10"
            >
              Join Event
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};
