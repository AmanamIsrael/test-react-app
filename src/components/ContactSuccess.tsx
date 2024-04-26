import animationData from "@/components/lotties/checkmark-lottie.json";
import { ContactUsData } from "@/schema/contact-us";
import Lottie from "react-lottie";
import { Button } from "./core/Button";

interface ContactSuccessProps {
  data: ContactUsData | undefined;
  onBack: () => void;
}

export const ContactSuccess = (props: ContactSuccessProps) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full text-center min-h-[600px]">
      <Lottie options={defaultOptions} height={400} width={400} />

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
          className="mt-4 bg-blue px-10 py-4 rounded-xl w-max mx-auto">
          Go back
        </Button>
      </div>
    </div>
  );
};
