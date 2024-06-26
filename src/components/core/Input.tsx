import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label: string;
  error?: string;
  formInputProps?: UseFormRegisterReturn;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ formInputProps, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-white">
          {props.label}
        </label>
        <input
          ref={ref}
          className="bg-lightDark rounded-md px-3 py-2 mt-1"
          {...formInputProps}
          {...props}
        />
        {props.error && (
          <span className="text-sm text-danger">{props.error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
