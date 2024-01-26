import React, { FC } from "react";
import Image from "next/image";

type Props = {
  icon: string;
  hasIncrease: boolean;
  totalText: string;
  total: number;
  comparePercentage: number;
};

const StatisticsCard: FC<Props> = ({
  icon,
  hasIncrease,
  totalText,
  total,
  comparePercentage,
}) => {
  return (
    <div className="bg-white dark:bg-gray-600 border-[#EDF2F7] dark:border-[#3d6185] border-[1px] xl:h-[195px] p-2 rounded-[14px] flex flex-col justify-between gap-2">
      <div className="flex justify-between items-center">
        <Image
          className="border-[0.4px] border-[#78828A] bg-white dark:bg-gray-600 rounded-full p-[7px] w-fit h-fit flex items-center"
          src={icon}
          width={40}
          height={40}
          alt="Icon"
        />

        <Image
          className=""
          src={
            hasIncrease
              ? "/assets/images/stats-increasing.svg"
              : "/assets/images/stats-decreasing.svg"
          }
          width={100}
          height={100}
          alt="Increasing"
        />
      </div>

      <h3 className="text-[#898989] dark:text-gray-300 text-[15px] md:text-[20px] font-[400]">
        {totalText}
      </h3>
      <h4 className="text-[#3A3F51] dark:text-gray-300 text-[19px] md:text-[25px] font-[500]">
        {total}
      </h4>

      <div className="flex gap-3 items-center">
        <div
          className={`rounded-full flex items-center px-2 gap-1 ${
            hasIncrease ? "bg-[#34caa441]" : "bg-[#ed534e38]"
          }`}
        >
          <Image
            src={
              hasIncrease
                ? "/assets/images/increasing.svg"
                : "/assets/images/decreasing.svg"
            }
            width={10}
            height={10}
            alt="Icon"
          />
          <span
            className={`text-[14px] font-medium ${
              hasIncrease ? "text-[#34CAA5]" : "text-[#ED544E]"
            }`}
          >
            {comparePercentage}%
          </span>
        </div>

        <p className="text-[15px] text-[#606060] dark:text-gray-300 font-medium">
          vs. previous month
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;
