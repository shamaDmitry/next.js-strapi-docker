"use client";

import React, { FC, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PostType } from "@/types/strapi";

interface BlogListProps {
  className?: string;
  types: PostType[];
}

const TypeSelector: FC<BlogListProps> = ({ className, types }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedType, setSelectedType] = useState(() => {
    return searchParams.get("type")?.toString() || "all";
  });

  const handleClick = (type: string) => {
    const params = new URLSearchParams(searchParams);
    setSelectedType(type);

    if (type === "all") {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
      <p className="font-semibold text-lg">Article type:</p>

      <div className="flex gap-4">
        <Button
          size={"sm"}
          variant={selectedType === "all" ? "default" : "outline"}
          onClick={() => handleClick("all")}
        >
          All
        </Button>
        {types.map((type) => {
          return (
            <Button
              key={type.id}
              size={"sm"}
              variant={selectedType === type.type ? "default" : "outline"}
              className="capitalize"
              onClick={() => handleClick(type.type)}
            >
              {type.type}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeSelector;
