"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface BlogListProps {
  className?: string;
}

const SearchField: FC<BlogListProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(async (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (searchTerm) {
      params.set("searchTerm", searchTerm.trim());
    } else {
      params.delete("searchTerm");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div
      className={cn({
        "relative w-full md:w-[400px]": true,
        [`${className}`]: className,
      })}
    >
      <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        placeholder="Search"
        type="search"
        className="w-full pl-8 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-slate-500 transition-colors"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("searchTerm")?.toString()}
      />
    </div>
  );
};

export default SearchField;
