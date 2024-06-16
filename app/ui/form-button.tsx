"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({
  action,
  children,
  loadingText,
}: {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  loadingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      formAction={action}
      className="text-onprimary bg-primary rounded-lg mb-3 font-semibold py-2
      disabled:bg-orange-100 disabled:text-primary"
      disabled={pending}
    >
      {pending ? "Logging in..." : children}
    </button>
  );
}
