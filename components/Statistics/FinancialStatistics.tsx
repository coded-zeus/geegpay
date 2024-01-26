"use client";

import { STATISTICS_DATA } from "@/data/statistics";
import React from "react";
import StatisticsCard from "./StatisticsCard";

const FinancialStatistics = () => {
  return (
    <section className="mx-5 grid grid-cols-1 md:grid-cols-2 gap-3 w-[97%] xl:w-[40%]">
      {STATISTICS_DATA.map((data) => (
        <StatisticsCard
          key={data.id}
          icon={data.icon}
          hasIncrease={data.hasIncrease}
          totalText={data.totalText}
          total={data.total}
          comparePercentage={data.comparePercentage}
        />
      ))}
    </section>
  );
};

export default FinancialStatistics;
