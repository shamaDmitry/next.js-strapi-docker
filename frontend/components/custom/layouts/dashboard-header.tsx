"use client";

import React, { FC, useEffect } from "react";
import { cn } from "@/lib/utils";
import UserNavMenu from "../user/user-nav-menu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getCurrentUser } from "@/lib/store/features/user/userSlice";

interface DashboardHeaderProps {
  className?: string;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({ className }) => {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div
      className={cn({
        "sticky top-0 bg-white z-10 shadow-md p-4 flex items-center justify-between left-0":
          true,
        [`${className}`]: className,
      })}
    >
      <div>Page Title</div>

      <div>
        {userData.user && (
          <UserNavMenu
            isLoading={userData.isLoading}
            username={userData.user.username}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
