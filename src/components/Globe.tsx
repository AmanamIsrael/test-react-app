"use client";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

interface GlobeProps {}

export const Globe = (props: GlobeProps) => {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="md:w-[600px] w-[300px] h-[300px] rounded-full md:h-[600px]">
        <Suspense fallback={<div>Loading globe...</div>}>
          <Spline scene="https://prod.spline.design/UNB788iDoMEbji-6/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
};
