import Image from "next/image";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CloseIcon from "@mui/icons-material/Close";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

const OrderModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex items-center gap-1 text-[14px] font-[300] text-[#0D062D] dark:text-gray-400">
          <Image
            src="/assets/images/download.svg"
            width={20}
            height={20}
            alt="Download Icon"
            className="dark:filter dark:invert"
          />
          <span>View</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col gap-5">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-gray-700 dark:text-gray-300 text-[25px] md:text-[30px] font-bold">
              Invoice
            </h3>
            <AlertDialogCancel>
              <CloseIcon />
            </AlertDialogCancel>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
              Name
            </h1>
            <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
              Marcus Bergson
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
              Phone Number
            </h1>
            <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
              +234 812-726-3872
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
              Amount
            </h1>
            <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
              $80,000
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
              Status
            </h1>
            <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
              Paid
            </p>
          </div>

          <div className="flex justify-between flex-wrap gap-3">
            <AlertDialogCancel>
              <PrintRoundedIcon />
            </AlertDialogCancel>

            <AlertDialogCancel>
              <DownloadForOfflineRoundedIcon />
            </AlertDialogCancel>

            <AlertDialogCancel>
              <QuestionAnswerRoundedIcon />
            </AlertDialogCancel>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderModal;
