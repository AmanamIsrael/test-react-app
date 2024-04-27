import { ContactUsData } from "@/schema/contact-us";
import { Button } from "./core/Button";
import { Checkmark } from "./core/Checkmark";

interface ContactSuccessProps {
  data: ContactUsData | undefined;
  onBack: () => void;
}

export const ContactSuccess = (props: ContactSuccessProps) => {
  return (
    <div className="w-full text-center min-h-[600px]">
      <Checkmark />

      <div className="grid gap-4">
        <p className="text-2xl font-bold">
          Message sent to
          <span className="ml-2 text-blue">{props.data?.email}</span>
        </p>
        <p className="text-lg font-light">
          We&apos;ll get back to you as soon as possible.
        </p>

        <Button
          onClick={props.onBack}
          className="mt-4 bg-blue px-6 py-3 rounded-md w-max mx-auto">
          Go back
        </Button>
      </div>
    </div>
  );
};
