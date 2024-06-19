import Link from "next/link";
import { LogoTitle } from "./logo";
import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const initial = user?.user_metadata.username[0];

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-32"
      aria-label="Global"
    >
      <div id="logo">
        <LogoTitle />
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Product
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Features
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Marketplace
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Company
        </a>
      </div>
      {user ? (
        <Link
          href="/account"
          className="border border-primary bg-yellow-100 rounded-full size-10 text-center align-middle pt-2
          text-primary hover:border-complement"
        >
          {initial}
        </Link>
      ) : (
        <Link
          href="/login"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </nav>
  );
}
