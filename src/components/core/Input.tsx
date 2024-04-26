interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-white">{props.label}</label>
      <input
        {...props}
        className="border bg-lightDark rounded-md px-3 py-2 mt-1"
      />
      {props.error && (
        <span className="text-sm text-danger">{props.error}</span>
      )}
    </div>
  );
};
