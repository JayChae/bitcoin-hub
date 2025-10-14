"use client";

import Link from "next/link";
import { Bitcoin } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/global", label: "Global" },
  { href: "/development", label: "Development" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Bitcoin className="w-8 h-8" />
            <span className="text-xl font-bold">Bitcoin Education</span>
          </Link>

          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
