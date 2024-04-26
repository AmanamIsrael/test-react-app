import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  formInputProps?: UseFormRegisterReturn;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ formInputProps, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-white">
          {props.label}
        </label>
        <textarea
          ref={ref}
          rows={8}
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

TextArea.displayName = "TextArea";
