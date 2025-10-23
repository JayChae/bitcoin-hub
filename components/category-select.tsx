"use client";

import { useRouter } from "@/i18n/navigation";
import { DevelopmentResourceCategory, DevelopmentResourceField } from "@/types";

import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

type Props = {
  field: DevelopmentResourceField;
  categories: { label: string; value: DevelopmentResourceCategory }[];
  className?: string;
  placeholder?: string;
};
export function CategorySelect({ field, categories, placeholder }: Props) {
  const router = useRouter();
  return (
    <Select
      onValueChange={(value) => {
        router.push(`/development/${field}?category=${value}`);
      }}
    >
      <SelectTrigger className="w-32">
        <span className="text-sm font-medium">{placeholder}</span>
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            key={category.value}
            value={category.value}
            className="cursor-pointer"
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
