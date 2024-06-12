import { cn } from "@/lib/utils";
import { Post } from "@/types/strapi";
import React, { FC } from "react";
import BlogCard from "./blog-card";

interface BlogListProps {
  className?: string;
  data: Post[];
}

const BlogList: FC<BlogListProps> = ({ className, data }) => {
  return (
    <div
      className={cn({
        "grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4": true,
        [`${className}`]: className,
      })}
    >
      {data.map((post) => {
        return <BlogCard postData={post} key={post.id} />;
      })}
    </div>
  );
};

export default BlogList;
