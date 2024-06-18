import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardAsideProps {
  className?: string;
}

const DashboardAside: FC<DashboardAsideProps> = ({ className }) => {
  return (
    <aside
      className={cn({
        "pointer-events-auto sticky flex flex-col left-0 h-screen col-start-1 w-80 top-0 p-2":
          true,
        [`${className}`]: className,
      })}
    >
      <Link
        href="/"
        className="mb-2 font-semibold text-xl border py-2 px-4 uppercase flex items-center justify-center w-full"
      >
        logo
      </Link>

      <ScrollArea className="rounded-md">
        <nav className="flex flex-col py-2 space-y-2">
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 1</Link>
        </nav>
      </ScrollArea>

      <div className="mt-auto py-2">bottom menu</div>
    </aside>
  );
};

export default DashboardAside;
