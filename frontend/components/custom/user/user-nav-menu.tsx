import { LogOutButton } from "@/components/forms/log-out-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FC } from "react";

interface UserNavMenuProps {
  isLoading: boolean;
  username: string | null;
  email?: string;
  avatar?: string;
}

const UserNavMenu: FC<UserNavMenuProps> = ({
  isLoading,
  username,
  email,
  avatar,
}) => {
  if (isLoading)
    return (
      <div className="size-10 flex justify-center flex-col items-center">
        spinner
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none flex justify-center flex-col items-center">
        <Avatar className="mb-1">
          <AvatarImage src={avatar} />
          <AvatarFallback>{username ? username.charAt(0) : "-"}</AvatarFallback>
        </Avatar>

        {email && <span className="text-sm">{email}</span>}
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
