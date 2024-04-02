"use client";
import Navbar from "@/components/back-office/navbar/Navbar";
import SideBar from "@/components/back-office/sidebar/SideBar";
import useViewport from "@/hooks/useViewPort";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [width] = useViewport();
  useEffect(() => {
    if (width >= 1024) {
      setOpenSideBar(true);
    } else {
      setOpenSideBar(false);
    }
  }, [width]);

  return (
    <div className="flex">
      {/* sidebar */}
      {openSideBar && <SideBar show={openSideBar} />}
      {/* Routcontent */}
      <div className={`${openSideBar && "lg:ml-64"}  ml-0 flex-grow w-full  `}>
        {/* Header */}

        <Navbar setSideBar={setOpenSideBar} isOpen={openSideBar} />
        {/* main */}
        <main className="min-h-screen mt-16 p-8 bg-slate-50 dark:bg-slate-900 text-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
