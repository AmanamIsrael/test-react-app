import animationData from "@/components/lotties/checkmark-lottie.json";
import Lottie from "react-lottie";

interface CheckmarkProps {}

export const Checkmark = (props: CheckmarkProps) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};
