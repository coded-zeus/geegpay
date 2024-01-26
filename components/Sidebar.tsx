"use client";

import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from "@/data/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const { setTheme } = useTheme();

  return (
    <React.Fragment>
      <nav
        className={`${
          isOpen
            ? "w-[20%] sm:w-[10%] md:w-[9%] lg:w-[8%] xl:w-[5%] bg-[#F7F8FA] border-r-[1px] dark:bg-gray-900 top-0 bottom-0 fixed -left-80 overflow-hidden duration-500 md:left-0"
            : "w-[20%] sm:w-[10%] md:w-[9%] lg:w-[8%] xl:w-[5%] bg-[#F7F8FA] border-r-[1px] dark:bg-gray-900 top-0 bottom-0 fixed -left-80 overflow-hidden duration-500 md:left-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <Image
              src="/assets/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="my-5 mx-auto"
            />

            <ul className="flex flex-col gap-5">
              {SIDEBAR_LINKS.map((link) => (
                <Link href="/" key={link.id}>
                  <Image
                    src={link.imgSrc}
                    width={40}
                    height={40}
                    alt={link.imgSrc}
                    className={`w-full h-[40px] ${
                      link.route === pathname &&
                      "border-r-2 border-[#0D062D] rounded-[2px] dark:filter dark:invert"
                    }`}
                  />
                </Link>
              ))}
            </ul>
          </div>

          <ul className="my-7 bg-white p-2 rounded-full w-[60%] mx-auto flex flex-col items-center gap-2">
            <button onClick={() => setTheme("light")}>
              <Image
                src="/assets/images/day.svg"
                width={40}
                height={40}
                alt="Day icon"
                className=""
              />
            </button>

            <button onClick={() => setTheme("dark")}>
              <Image
                src="/assets/images/night.svg"
                width={40}
                height={40}
                alt="Day icon"
                className=""
              />
            </button>
          </ul>

          <ul className="mt-auto mb-4 pb-10 flex flex-col items-center gap-3">
            {SIDEBAR_BOTTOM_LINKS.map((link) => (
              <Link href="/" key={link.id}>
                <Image
                  src={link.imgSrc}
                  width={40}
                  height={40}
                  alt={link.imgSrc}
                  className=""
                />
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <nav
        className={`${
          isOpen
            ? "w-[20%] sm:w-[10%] md:w-[9%] lg:w-[8%] xl:w-[5%] bg-[#F7F8FA] border-r-[1px] dark:bg-gray-900 top-0 bottom-0 fixed left-0 overflow-hidden duration-500 md:hidden"
            : "hidden "
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <Image
              src="/assets/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="my-5 mx-auto"
            />

            <ul className="flex flex-col gap-5">
              {SIDEBAR_LINKS.map((link) => (
                <Link href="/" key={link.id}>
                  <Image
                    src={link.imgSrc}
                    width={40}
                    height={40}
                    alt={link.imgSrc}
                    className={`w-full h-[40px] ${
                      link.route === pathname &&
                      "border-r-2 border-[#0D062D] rounded-[2px] dark:filter dark:invert"
                    }`}
                  />
                </Link>
              ))}
            </ul>
          </div>

          <ul className="my-7 bg-white p-2 rounded-full w-[60%] mx-auto flex flex-col items-center gap-2">
            <button onClick={() => setTheme("light")}>
              <Image
                src="/assets/images/day.svg"
                width={40}
                height={40}
                alt="Day icon"
                className=""
              />
            </button>

            <button onClick={() => setTheme("dark")}>
              <Image
                src="/assets/images/night.svg"
                width={40}
                height={40}
                alt="Day icon"
                className=" "
              />
            </button>
          </ul>

          <ul className="mt-auto mb-4 pb-10 flex flex-col items-center gap-3">
            {SIDEBAR_BOTTOM_LINKS.map((link) => (
              <Link href="/" key={link.id}>
                <Image
                  src={link.imgSrc}
                  width={40}
                  height={40}
                  alt={link.imgSrc}
                  className=""
                />
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
