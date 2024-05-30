"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  text: string;
  className?: string;
  loading?: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  className,
  loading,
}) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <Button
      className={cn({
        "w-full flex justify-center items-center h-11": true,
        [`${className}`]: className,
      })}
      type="submit"
    >
      {pending || loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        text
      )}
    </Button>
  );
};
