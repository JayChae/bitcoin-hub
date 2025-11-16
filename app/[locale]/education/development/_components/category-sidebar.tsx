import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { DevelopmentResourceCategory } from "@/types";

type Props = {
  title: string;
  categories: { label: string; value: DevelopmentResourceCategory }[];
  selectedCategory: DevelopmentResourceCategory;
  className?: string;
};

export function CategorySidebar({
  title,
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
            href={`/education/development/${category.value}`}
            key={category.value}
          >
            <Button
              key={category.value}
              className={cn(
                "hover:bg-primary/20 w-full justify-start text-left",
                selectedCategory === category.value
                  ? "bg-primary/50"
                  : "bg-transparent",
              )}
            >
              {category.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
