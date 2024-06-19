import Link from "next/link";
import { LogoTitle } from "./logo";
import { createClient } from "@/utils/supabase/server";
import ProfileIcon from "./profile-icon";

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
      <ProfileIcon initial={initial} />
    </nav>
  );
}
