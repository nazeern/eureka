import { login } from "@/app/login/actions";
import Link from "next/link";
import { BlurTop, BlurBottom } from "@/app/ui/blur";
import { LogoTitle } from "@/app/ui/logo";
import Toast from "@/app/ui/toast";

export default function LoginPage({
  searchParams,
}: {
  searchParams: {
    success?: string;
  };
}) {
  const success = searchParams?.success
    ? decodeURIComponent(searchParams?.success)
    : null;

  return (
    <div className="h-screen bg-background flex flex-col items-center justify-center">
      <BlurTop />
      <div id="logo" className="mb-4">
        <LogoTitle />
      </div>
      <div className="min-w-96 w-4/12 bg-white rounded-lg shadow p-10 border">
        <Toast style="success">{success}</Toast>
        <p className="text-2xl font-bold mb-6">Log in to your account</p>
        <form className="flex flex-col gap-y-2">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-3"
          />
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-3"
          />
          <button formAction={login} className="bg-primary rounded-lg mb-3">
            <p className="text-onprimary font-semibold my-2">Log In</p>
          </button>
          <p className="text-sm font-light text-gray-500">
            Need an account?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-primary hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </form>
      </div>
      <BlurBottom />
    </div>
  );
}
