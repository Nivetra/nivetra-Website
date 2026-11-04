import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center hero-wash">
      <Logo href="/" />
      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-brand">404</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">This page took a detour.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
      <Link href="/services" className="mt-8 text-sm font-medium text-muted hover:text-brand">
        Explore our services →
      </Link>
    </div>
  );
}
