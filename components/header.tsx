"use client";

import { Link } from "@/i18n/navigation";
import { Bitcoin, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IntlType, LanguageType, LocaleType } from "@/types/intl";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/global", label: "Global" },
  { href: "/development", label: "Development" },
];
export default function Header() {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2).join("/");
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Bitcoin className="w-8 h-8" />
            <span className="text-xl font-bold">Bitcoin Education</span>
          </Link>

          <ul className="flex gap-6 items-center">
            {links.map((link) => (
              <li className="text-sm font-medium transition-colors hover:text-primary">
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
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
