import { signup } from "@/app/login/actions";
import Link from "next/link";
import { BlurBottom, BlurTop } from "@/app/ui/blur";
import { LogoTitle } from "@/app/ui/logo";
import Toast from "@/app/ui/toast";

export default function SignupPage({
  searchParams,
}: {
  searchParams: {
    error?: string;
  };
}) {
  const error = searchParams?.error
    ? decodeURIComponent(searchParams?.error)
    : null;

  return (
    <div className="h-screen bg-background flex flex-col items-center justify-center">
      <BlurTop />
      <div id="logo" className="mb-4">
        <LogoTitle />
      </div>
      <div className="w-4/12 bg-white rounded-lg shadow p-10 border">
        <Toast style="error">{error}</Toast>
        <p className="text-2xl font-bold mb-6">Create an account</p>
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
          <label htmlFor="password" className="">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-3"
          />
          <div className="flex items-center gap-x-1 mb-3">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-primary"
              required
            />
            <label htmlFor="terms" className="font-light text-sm text-gray-500">
              I accept the{" "}
              <Link
                className="font-medium text-primary hover:underline"
                href="/terms"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button formAction={signup} className="bg-primary rounded-lg mb-3">
            <p className="text-onprimary font-semibold my-2">
              Create an Account
            </p>
          </button>
          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-primary hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
      <BlurBottom />
    </div>
  );
}
