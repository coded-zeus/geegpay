"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";

const ProfileAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-full md:w-fit border-[0.4px] border-[#78828A] bg-white dark:bg-gray-600 h-fit py-1 rounded-full px-3 flex justify-between items-center gap-2">
          <Image
            src="/assets/images/user1.svg"
            width={40}
            height={40}
            alt="User"
          />

          <div className="flex lg:inline md:hidden flex-col items-end">
            <h4 className="text-[#26282C] dark:text-white text-[16px] font-[400]">
              Justin Bergson
            </h4>
            <span className="text-[14px] dark:text-gray-200 text-[#787486] font-[400]">
              Justin@gmail.com
            </span>
          </div>
          <KeyboardArrowDownOutlinedIcon className="text-[#26282C]" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account (Justin Bergson)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Transactions</DropdownMenuItem>
        <DropdownMenuItem>Investment</DropdownMenuItem>
        <DropdownMenuItem>Financial Management</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
