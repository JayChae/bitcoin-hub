"use client";
import { ChevronDownIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { DevelopmentResourceCategory, DevelopmentResourceField } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  field: DevelopmentResourceField;
  categories: { label: string; value: DevelopmentResourceCategory }[];
  className?: string;
  placeholder?: string;
};
export function CategorySelect({ field, categories, placeholder }: Props) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="border-input focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-32 items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]">
        <span className="text-sm font-medium">{placeholder}</span>
        <ChevronDownIcon className="size-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[200px]">
        {categories.map((category) => (
          <DropdownMenuItem key={category.value} asChild className="p-0">
            <Link
              href={`/development/${field}/${category.value}`}
              className="hover:bg-primary/20 flex w-full cursor-pointer items-center px-4 py-3 text-base md:px-3 md:py-2 md:text-sm"
            >
              {category.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
