import { TOP_PLATFORM } from "@/data/platform";
import Link from "next/link";
import React from "react";
import PlatformCard from "./PlatformCard";

const TopPlatform = () => {
  return (
    <section className="mx-5 w-[97%] xl:w-[40%] bg-white dark:bg-gray-600 border-[#EDF2F7] dark:border-[#3d6185] border-[1px] xl:h-[400px] p-5 rounded-[14px] flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Top Platform
        </h3>

        <Link href="" className="text-[#34CAA5] text-[15px] md:text-[20px] font-[400]">
          See All
        </Link>
      </div>

      <ul className="mt-5 flex flex-col gap-5 overflow-y-auto">
        {TOP_PLATFORM.map((item) => (
          <PlatformCard
            key={item.id}
            title={item.title}
            width={item.size}
            background={item.background}
            amount={item.amount}
            incrementBy={item.incrementBy}
          />
        ))}
      </ul>
    </section>
  );
};

export default TopPlatform;
