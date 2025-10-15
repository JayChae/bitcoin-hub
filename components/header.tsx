"use client";

import { Bitcoin, Languages } from "lucide-react";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageType, LocaleType } from "@/types/intl";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/global", label: "Global" },
  { href: "/development", label: "Development" },
];
export default function Header() {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2).join("/");
  return (
    <header className="border-border bg-card/50 fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
          >
            <Bitcoin className="h-8 w-8" />
            <span className="text-xl font-bold">Bitcoin Education</span>
          </Link>

          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li
                key={link.href}
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Languages className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <Link key={lang.code} href={`/${path}`} locale={lang.code}>
                      <DropdownMenuItem className="cursor-pointer">
                        {lang.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

type Language = {
  code: LocaleType;
  label: LanguageType;
};
const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
];
