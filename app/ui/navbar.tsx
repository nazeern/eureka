import Link from "next/link";
import { LogoTitle } from "./logo";

export default function Navbar() {
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
      <Link
        href="/login"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    </nav>
  );
}
