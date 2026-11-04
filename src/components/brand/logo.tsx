import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logo from "@/../public/brand/nivetra-logo.png";

/**
 * Nivetra Technologies logo — the brand lockup (gradient "N" swoosh + navy
 * wordmark + "Technologies" sublabel). Transparent PNG, sized by height.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string | null;
}) {
  const content = (
    <Image
      src={logo}
      alt="Nivetra Technologies"
      priority
      className={cn("h-9 w-auto", className)}
    />
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="Nivetra Technologies home" className="inline-flex">
      {content}
    </Link>
  );
}
