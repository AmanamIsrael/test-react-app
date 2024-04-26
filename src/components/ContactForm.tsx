"use client";
import { ContactUsData, ContactUsSchema } from "@/schema/contact-us";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./core/Button";
import { Input } from "./core/Input";
import { TextArea } from "./core/TextArea";

interface ContactFormProps {
  onSubmit: (data: ContactUsData) => void;
}

export const ContactForm = (props: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
    resolver: zodResolver(ContactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsData> = (data) => {
    props.onSubmit(data);
  };

  return (
    <>
      <p className="font-light uppercase">Get in touch</p>
      <p className="text-6xl font-bold">Contact.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid text-start gap-4">
        <Input
          formInputProps={register("name")}
          error={errors.name?.message as string}
          label="Name"
          name="name"
          placeholder="What's your name?"
          type="text"
        />
        <Input
          formInputProps={register("email")}
          error={errors.email?.message as string}
          label="Email"
          name="email"
          placeholder="Whats your email?"
          type="email"
        />
        <TextArea
          label="Message"
          name="message"
          formInputProps={register("message")}
          error={errors.message?.message as string}
          placeholder="what do you want to say?"
        />
        <Button
          type="submit"
          className="bg-blue text-white w-max px-4 py-2 rounded-md">
          Send
        </Button>
      </form>
    </>
  );
};
