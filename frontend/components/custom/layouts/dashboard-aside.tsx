import React, { FC } from "react";
import Link from "next/link";
import { cn, uuid } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard, User } from "lucide-react";

interface DashboardAsideProps {
  className?: string;
}

const menu = [
  {
    id: uuid(),
    href: "/dashboard",
    title: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: uuid(),
    href: "/profile",
    title: "profile",
    icon: <User />,
  },
];

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
        href="/dashboard"
        className="mb-2 font-semibold text-xl border py-2 px-4 uppercase flex items-center justify-center w-full"
      >
        logo
      </Link>

      <ScrollArea className="rounded-md">
        <nav className="flex flex-col py-2 space-y-2">
          {menu.map((menuItem) => {
            return (
              <Link
                key={menuItem.id}
                href={menuItem.href}
                className="flex gap-3 capitalize p-2 rounded-md transition-colors hover:bg-slate-100 font-medium"
              >
                {menuItem.icon}

                {menuItem.title}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="mt-auto py-2">bottom menu</div>
    </aside>
  );
};

export default DashboardAside;
