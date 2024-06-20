import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";

interface HeadlineProps extends PropsWithChildren {
  id?: string;
  tag?: string;
  className?: string;
}

export const Headline: FC<HeadlineProps> = ({
  children,
  id,
  className = "",
  tag = "h1",
}) => {
  const Component = tag as React.ElementType;
  const defaultStyles = "mb-5 scroll-m-20";
  const defaultH1Styles = "text-4xl font-extrabold tracking-tight lg:text-5xl";
  const defaultH2Styles = "text-3xl font-semibold tracking-tight first:mt-0";
  const defaultH3Styles = "text-2xl font-semibold tracking-tight";
  const defaultH4Styles = "text-xl font-semibold tracking-tight";

  return (
    <Component
      id={id}
      className={cn({
        "": true,
        [`${defaultStyles}`]: true,
        [`${defaultH1Styles}`]: tag === "h1",
        [`${defaultH2Styles}`]: tag === "h2",
        [`${defaultH3Styles}`]: tag === "h3",
        [`${defaultH4Styles}`]: tag === "h4",
        [`${className}`]: className,
      })}
    >
      {children}
    </Component>
  );
};
