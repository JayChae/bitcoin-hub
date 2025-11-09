import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { DevelopmentResourceField } from "@/types";

const navLinks = [
  {
    href: "/development/layer1/libraries-sdks",
    label: "Layer1",
  },
  {
    href: "/development/layer2/libraries-sdks",
    label: "Layer2",
  },
  // {
  //   href: "/development/education/guides-tutorials",
  //   label: "Education",
  // },
];

type DevNavProps = {
  className?: string;
  activeLink: DevelopmentResourceField;
};
export function DevNav({ className, activeLink }: DevNavProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-start gap-4 lg:justify-end",
        className,
      )}
    >
      {navLinks.map((link) => {
        const isActive = String(link.label).toLowerCase() === activeLink;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "hover:text-primary flex size-fit items-center text-sm font-medium transition-colors",
              isActive ? "text-primary" : "text-muted-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
