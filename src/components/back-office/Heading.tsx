import { NavigationItem } from "@/lib/types";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Heading: React.FC<{
  title: string;
  additionalBtn?: NavigationItem;
  returnBtn?: boolean;
}> = ({ title, additionalBtn, returnBtn }) => {
  return (
    <div className="w-full flex justify-between py-4 mb-4">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-50">
        {title}
      </h2>
      {additionalBtn && (
        <Link
          href={
            typeof additionalBtn?.path === "string" ? additionalBtn?.path : "/"
          }
          className="text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg px-5 py-3 space-x-3 text-center inline-flex items-center dark:focus:ring-green-600/55 me-2 text-base"
        >
          {additionalBtn.icons}
          <span>{additionalBtn?.title}</span>
        </Link>
      )}
      {returnBtn && (
        <button className="text-slate-800 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-3 ">
          <X />
        </button>
      )}
    </div>
  );
};

export default Heading;
