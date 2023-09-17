import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type Props = FieldWrapperPassThroughProps & {
  type?: "date" | "datetime-local";
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const DateField: React.FC<Props> = (props: Props) => {
  const { type = "date", label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
        {...registration}
      />
    </FieldWrapper>
  );
};
