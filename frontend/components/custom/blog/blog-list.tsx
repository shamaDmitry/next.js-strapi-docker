import { cn, flattenAttributes, getPageData } from "@/lib/utils";
import { Post } from "@/types/strapi";
import React, { FC } from "react";
import BlogCard from "./blog-card";
import { blogListQuery } from "@/queries/blog-list";

interface BlogListProps {
  className?: string;
  searchTerm?: string;
  type?: string;
  data: Post[];
}

interface BlogPosts {
  data: Post[];
}

const BlogList: FC<BlogListProps> = async ({
  className,
  searchTerm,
  type,
  data,
}) => {
  return (
    <div
      className={cn({
        "grid grid-cols-1 md:grid-cols-3 gap-4": true,
        [`${className}`]: className,
      })}
    >
      {!data.length && <p>nothing is here</p>}

      {data.map((post) => {
        return <BlogCard postData={post} key={post.id} />;
      })}
    </div>
  );
};

export default BlogList;
