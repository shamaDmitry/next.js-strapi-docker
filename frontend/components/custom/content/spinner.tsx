import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={cn({
        "border-gray-300 animate-spin rounded-full mx-auto": true,
        [`${className}`]: className,
      })}
    />
  );
};

export default Spinner;
