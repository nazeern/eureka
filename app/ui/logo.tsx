import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/eureka-logo.jpeg"
        height={36}
        width={36}
        alt="Eureka Logo"
        className="rounded-lg border border-orange-300"
      />
    </Link>
  );
}

export function LogoTitle() {
  return (
    <Link href="/" className="flex items-end gap-x-1">
      <Image
        src="/eureka-logo.jpeg"
        height={36}
        width={36}
        alt="Eureka Logo"
        className="rounded-lg border border-orange-300"
      />
      <p className="text-2xl font-semibold">Eureka</p>
    </Link>
  );
}
