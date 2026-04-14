import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Replace with actual API endpoint or email service
      console.log("Form data:", data);
      setSubmitMessage({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
      reset();
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch {
      setSubmitMessage({ type: "error", text: "Failed to send message. Please try again." });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitMessage,
    onSubmit,
  };
};
