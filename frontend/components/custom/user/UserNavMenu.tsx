import { LogOutButton } from "@/components/forms/log-out-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import Link from "next/link";
import { FC } from "react";

interface UserNavMenuProps {
  username: string;
  email: string;
  avatar?: string;
}

const UserNavMenu: FC<UserNavMenuProps> = ({ username, email, avatar }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none flex justify-center flex-col items-center">
        <Avatar className="mb-1">
          <AvatarImage src={avatar || "https://placehold.co/200x200"} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>

        <span className="text-sm">{email}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogOutButton text="log out" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavMenu;
