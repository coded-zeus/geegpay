import React, { FC } from "react";

type Props = {
  title: string;
  width: string;
  background: string;
  amount: string;
  incrementBy: string;
};

const PlatformCard: FC<Props> = ({
  title,
  width,
  background,
  amount,
  incrementBy,
}) => {
  return (
    <li className="flex flex-col w-full gap-3">
      <h4 className="text-[#22242C] dark:text-gray-300 text-[15px] font-medium">
        {title}
      </h4>

      <div className="w-full h-[16px] rounded-full bg-[#F5F5F5]">
        <div
          style={{
            width: width,
            backgroundColor: background,
          }}
          className="rounded-full transition-all duration-500 h-full"
        />
      </div>

      <div className="flex justify-between">
        <p className="text-gray-600 dark:text-gray-200 text-[15px] font-medium">
          {amount}
        </p>
        <p className="text-gray-600 dark:text-gray-200 text-[15px] font-medium">
          {incrementBy}
        </p>
      </div>
    </li>
  );
};

export default PlatformCard;
