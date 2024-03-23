import Navbar from "@/components/back-office/navbar/Navbar";
import SideBar from "@/components/back-office/sidebar/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="z-10">
        <SideBar />
      </div>
      {/* Routcontent */}
      <div className="lg:ml-64 ml-0 flex-grow w-full z-10 ">
        {/* Header */}

        <Navbar />
        {/* main */}
        <main className="min-h-screen mt-16 p-8 bg-slate-50 dark:bg-slate-900 text-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
