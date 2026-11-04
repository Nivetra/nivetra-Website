"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { nav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-surface/85 backdrop-blur-xl"
          : "border-transparent bg-surface/0",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-18">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-gradient px-5 text-sm font-semibold leading-none text-white ring-1 ring-inset ring-white/20 shadow-[0_2px_8px_-2px_rgba(11,167,251,0.4)] transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_12px_-3px_rgba(99,34,242,0.45)] hover:brightness-[1.06]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-sunken lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-surface transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-2.5 text-sm font-medium",
                isActive(item.href) ? "bg-sunken text-brand" : "text-ink hover:bg-subtle",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="lg" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Let&apos;s Talk
          </Button>
        </Container>
      </div>
    </header>
  );
}
