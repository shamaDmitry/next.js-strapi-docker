import Link from "next/link";
import { FC } from "react";
import UserNavMenu from "../user/UserNavMenu";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { cn, uuid } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const menu = [
  {
    id: uuid(),
    text: "dashboard",
    href: "/dashboard",
  },
];

const Navigation: FC<NavigationProps> = async ({ className }) => {
  const currentUser = await getUserMeLoader();

  return (
    <nav
      className={cn({
        "flex items-center py-2 h-20": true,
        [`${className}`]: className,
      })}
    >
      <Link
        href="/"
        className="border py-2 px-4 font-semibold uppercase flex items-center justify-center w-fit"
      >
        logo
      </Link>

      <div className="flex items-center gap-4 justify-center flex-1">
        {menu.map((menuItem) => {
          return (
            <Link key={menuItem.id} href={menuItem.href} className="capitalize">
              {menuItem.text}
            </Link>
          );
        })}
      </div>

      {!currentUser.data && (
        <div className="flex justify-center gap-4 p-4">
          <Link href="/login">Sign-in</Link>
          <Link href="/register">Sign-up</Link>
        </div>
      )}

      {currentUser.data && (
        <UserNavMenu
          username={currentUser.data.username}
          email={currentUser.data.email}
        />
      )}
    </nav>
  );
};

export default Navigation;