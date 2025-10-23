import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { DevelopmentResourceCategory, DevelopmentResourceField } from "@/types";

import { Button } from "./ui/button";

type Props = {
  title: string;
  field: DevelopmentResourceField;
  categories: { label: string; value: DevelopmentResourceCategory }[];
  selectedCategory: DevelopmentResourceCategory;
  className?: string;
};

export function CategorySidebar({
  title,
  field,
  categories,
  selectedCategory,
  className,
}: Props) {
  return (
    <aside className={cn("w-64 flex-shrink-0", className)}>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <nav className="flex flex-col gap-2">
        {categories.map((category) => (
          <Link
            href={`/development/${field}?category=${category.value}`}
            key={category.value}
          >
            <Button
              key={category.value}
              variant={
                selectedCategory === category.value ? "default" : "ghost"
              }
              className="w-full justify-start text-left"
            >
              {category.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
