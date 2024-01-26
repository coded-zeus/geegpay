"use client";
import Header from "@/components/Header";
import LastOrders from "@/components/Orders/LastOrders";
import TopPlatform from "@/components/Platform/TopPlatform";
import SalesTrend from "@/components/Sales/SalesTrend";
import FinancialStatistics from "@/components/Statistics/FinancialStatistics";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  return (
    <main
      className={`${
        isOpen
          ? "ml-[20%] sm:ml-[10%] md:ml-[9%] lg:ml-[8%] xl:ml-[5%] w-[80%] sm:w-[90%] md:w-[91%] lg:w-[92%] transition-all duration-500 xl:w-[95%] z-50 pb-10"
          : "w-full pb-10 z-50 transition-all duration-500 md:ml-[9%] md:w-[91%] lg:ml-[8%] lg:w-[92%] xl:ml-[5%] xl:w-[95%]"
      }`}
    >
      <Header />
      <div className="mt-10 flex xl:flex-row flex-col justify-between items-center gap-1">
        <SalesTrend />
        <FinancialStatistics />
      </div>

      <div className="mt-10 flex xl:flex-row flex-col justify-between items-center gap-1">
        <LastOrders />
        <TopPlatform />
      </div>
    </main>
  );
}
