"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({
  action,
  children,
  loadingText,
  className,
}: {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  loadingText: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      formAction={action}
      className={`text-onprimary bg-primary rounded-lg mb-3 font-semibold py-2 px-4
      disabled:bg-orange-100 disabled:text-primary ${className}`}
      disabled={pending}
    >
      {pending ? loadingText : children}
    </button>
  );
}
