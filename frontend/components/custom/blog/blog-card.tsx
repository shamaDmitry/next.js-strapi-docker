import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Post } from "@/types/strapi";
import Link from "next/link";
import React, { FC } from "react";
import BlogBadge from "@/components/custom/blog/blog-badge";

interface BlogListProps {
  className?: string;
  postData: Post;
}

const BlogCard: FC<BlogListProps> = ({ postData, className }) => {
  const type = postData.article_type.type;

  return (
    <Link
      key={postData.id}
      href={`/blog/${postData.id}`}
      className={cn({
        "border p-4 flex shadow flex-col hover:scale-105 transition-transform":
          true,
        [`${className}`]: className,
      })}
    >
      <BlogBadge type={type} />

      <h4 className="capitalize font-medium">{postData.title}</h4>
    </Link>
  );
};

export default BlogCard;
