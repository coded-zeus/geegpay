import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

const CalendarDropdown = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <DropdownMenu>
      <div className="flex items-center gap-3">
        <h4 className="text-[#3A3F51] dark:text-gray-300 text-[16px] font-[400]">
          Short by:
        </h4>
        <DropdownMenuTrigger>
          <div className="w-fit border-[0.4px] border-[#78828A] bg-white dark:bg-gray-500 h-fit py-1 rounded-full px-3 flex items-center gap-2">
            <h4 className="text-[#26282C] dark:text-gray-300 text-[14px] font-[200]">
              Weekly
            </h4>

            <KeyboardArrowDownOutlinedIcon className="text-[#26282C]" />
          </div>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CalendarDropdown;
