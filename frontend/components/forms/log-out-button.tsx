"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { logOutAction } from "@/data/actions/auth-actions";

interface SubmitButtonProps {
  text: string;
  className?: string;
  loading?: boolean;
}

export const LogOutButton: FC<SubmitButtonProps> = ({
  text,
  className,
  loading,
}) => {
  return (
    <form action={logOutAction} className="w-full">
      <button
        className={cn({
          "capitalize w-full text-left": true,
          [`${className}`]: className,
        })}
      >
        {text}
      </button>
    </form>
  );
};
