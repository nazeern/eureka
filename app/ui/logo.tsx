import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

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

export function LogoTitle({
  fontColor = "dark",
}: {
  fontColor?: "light" | "dark";
}) {
  return (
    <Link href="/" className="flex items-end gap-x-1">
      <Image
        src="/eureka-logo.jpeg"
        height={36}
        width={36}
        alt="Eureka Logo"
        className="rounded-lg border border-orange-300"
      />
      <p
        className={clsx("text-2xl font-semibold", {
          "text-secondary": fontColor == "light",
          "": fontColor == "dark",
        })}
      >
        Eureka
      </p>
    </Link>
  );
}
