import Header from "@/components/Header";
import LastOrders from "@/components/Orders/LastOrders";
import TopPlatform from "@/components/Platform/TopPlatform";
import SalesTrend from "@/components/Sales/SalesTrend";
import { useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";

export default function Home() {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const [hid, setHide] = useState<string>("hidden");
  const [show, setShow] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide("");
      setShow("hidden");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`${
        isOpen
          ? "ml-[20%] sm:ml-[10%] md:ml-[9%] lg:ml-[8%] xl:ml-[5%] w-[80%] sm:w-[90%] md:w-[91%] lg:w-[92%] transition-all duration-500 xl:w-[95%] z-50 pb-10"
          : "w-full pb-10 z-50 transition-all duration-500 md:ml-[9%] md:w-[91%] lg:ml-[8%] lg:w-[92%] xl:ml-[5%] xl:w-[95%]"
      }`}
    >
      <Header className={`${hid}`} />
      <div className={`absolute top-[50%] left-[50%] ${show}`}>
        <iframe src="/assets/1476.gif " />
      </div>

      <div
        className={`mt-10 flex xl:flex-row flex-col justify-between items-center gap-1 ${hid}`}
      >
        <SalesTrend />
        <FinancialStatistics />
      </div>

      <div
        className={`mt-10 flex xl:flex-row flex-col justify-between items-center gap-1 ${hid}`}
      >
        <LastOrders />
        <TopPlatform />
      </div>
    </main>
  );
}
