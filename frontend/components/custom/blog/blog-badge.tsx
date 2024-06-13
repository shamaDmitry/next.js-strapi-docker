import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface BlogListProps {
  className?: string;
  type: string;
}

const BlogBadge: FC<BlogListProps> = ({ type, className }) => {
  return (
    <Badge
      className={cn({
        "justify-center max-w-fit mb-2 bg-slate-500": true,
        [`${className}`]: className,
        "bg-black": type === "guides",
        "bg-blue-500": type === "news",
        "bg-red-500": type === "academy",
      })}
    >
      {type}
    </Badge>
  );
};

export default BlogBadge;
