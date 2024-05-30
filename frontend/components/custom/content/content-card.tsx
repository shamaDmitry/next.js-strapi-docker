import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";

interface ContentCardProps extends PropsWithChildren {
  className?: string;
}

const ContentCard: FC<ContentCardProps> = ({ children, className }) => {
  return (
    <section
      className={cn({
        "py-12": true,
        [`${className}`]: className,
      })}
    >
      {children}
    </section>
  );
};

export default ContentCard;
