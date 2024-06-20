import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  title: string | ReactNode;
}

const Card: FC<CardProps> = ({ className, children, title }) => {
  return (
    <div
      className={cn({
        "relative rounded-2xl flex flex-col w-full p-6 bg-base-100 shadow-xl bg-white":
          true,
        [`${className}`]: className,
      })}
    >
      <div className="text-xl font-semibold">{title}</div>

      <div className="border-t-[3px] h-4 my-2"></div>

      <div className="h-full w-full pb-6">{children}</div>
    </div>
  );
};

export default Card;
