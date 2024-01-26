import React from "react";
import Link from "next/link";
import { LAST_ORDERS } from "@/data/orders";
import Order from "./Order";

const LastOrders = () => {
  return (
    <section className="md:mx-5 bg-white dark:bg-gray-600 w-[97%] xl:w-[55%] h-fit md:h-[400px] rounded-[14px] border-[#EDF2F7] dark:border-[#3d6185] border-[1px] flex flex-col gap-5 p-5 overflow-auto">
      <div className="w-[70%] sm:w-[80%] md:w-full flex justify-between items-center absolute md:static">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Last Orders
        </h3>

        <Link
          href=""
          className="text-[#34CAA5] text-[15px] md:text-[20px] font-[400]"
        >
          See All
        </Link>
      </div>

      <div className="mt-10 md:mt-0 w-[100vh] md:w-full h-full overflow-x-auto">
        <table className="mt-5 w-full table-auto overflow-auto">
          <thead className="overflow-auto">
            <tr className="w-full border-b-[1.5px] overflow-auto border-[#E9EAEC]">
              <th className="text-[#9CA4AB] w-fit text-left text-[16px] font-[400] pb-5">
                Name
              </th>
              <th className="text-[#9CA4AB] w-fit text-left text-[16px] font-[400] pb-5">
                Date
              </th>
              <th className="text-[#9CA4AB] w-fit text-left text-[16px] font-[400] pb-5">
                Amount
              </th>
              <th className="text-[#9CA4AB] w-fit text-left text-[16px] font-[400] pb-5">
                Status
              </th>
              <th className="text-[#9CA4AB] w-fit text-left text-[16px] font-[400] pb-5">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {LAST_ORDERS.map((item) => (
              <Order
                key={item.id}
                profilePic={item.profilePic}
                name={item.name}
                date={item.date}
                amount={item.amount}
                paid={item.paid}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LastOrders;
