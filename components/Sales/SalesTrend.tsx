import { SALES_AMOUNT, SALES_CHART } from "@/data/sales";
import Image from "next/image";
import CalendarDropdown from "./CalendarDropdown";
import { useState } from "react";

const SalesTrend = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="md:mx-5 bg-white dark:bg-gray-600 w-[97%] xl:w-[55%] xl:w-[55%] h-fit md:h-[400px] rounded-[14px] border-[#EDF2F7] dark:border-[#3d6185] border-[1px] flex flex-col gap-5 p-5">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Sales Trends
        </h3>

        <CalendarDropdown />
      </div>

      <div className="w-full flex items-end gap-8 overflow-auto">
        <ul className="flex flex-col gap-5">
          {SALES_AMOUNT.map((item) => (
            <li
              key={item.id}
              className="text-[12px] text-[#525252] dark:text-gray-400 font-[600]"
            >
              {item.amount}
            </li>
          ))}
        </ul>

        <ul className="w-full justify-between mt-auto flex gap-6 overflow-hidden transition-all ease-in-out duration-700">
          {SALES_CHART.map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col gap-3 items-center transitiion-all ease-in-out duration-700"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredIndex === index && (
                <Image
                  src="/assets/images/top-sale.svg"
                  width={45}
                  height={100}
                  alt="Chart"
                  className="mt-auto top-sale overflow-y-hidden transition-all ease-in-out duration-700"
                />
              )}
              <Image
                src={item.chartImg}
                width={30}
                height={item.height}
                alt="Chart"
                className="dark:filter dark:invert mt-auto"
              />
              <span className="text-[14px] text-[#525252] dark:text-gray-400 font-[600]">
                {item.month}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SalesTrend;
