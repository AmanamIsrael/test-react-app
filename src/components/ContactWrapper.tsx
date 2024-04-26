"use client";
import { ContactUsData } from "@/schema/contact-us";
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { ContactSuccess } from "./ContactSuccess";

interface ContactWrapperProps {}

enum ContactStep {
  Form = "Form",
  Success = "Success",
}

export const ContactWrapper = (props: ContactWrapperProps) => {
  const [contactData, setContactData] = useState<ContactUsData | undefined>(
    undefined
  );
  const [step, setStep] = useState<ContactStep>(ContactStep.Form);

  const onSubmit = (data: ContactUsData) => {
    setContactData(data);
    setStep(ContactStep.Success);
  };

  return (
    <div className="grid h-max p-32 w-full text-center md:text-start gap-4">
      {step === ContactStep.Form ? (
        <ContactForm onSubmit={onSubmit} />
      ) : (
        <ContactSuccess
          data={contactData}
          onBack={() => setStep(ContactStep.Form)}
        />
      )}
    </div>
  );
};
