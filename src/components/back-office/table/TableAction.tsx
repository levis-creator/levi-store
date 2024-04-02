import { Download, Search, Trash } from "lucide-react";
import React from "react";

const TableAction = () => {
  return (
    <div className="flex py-6 px-12 bg-white dark:bg-slate-700 rounded-lg justify-between items-center gap-8">
      <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <div className="relative flex items-center space-x-3 px-5 py-2.5 transition-all ease-in duration-75 bg-slate-50 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Download />
          <span>Export</span>
        </div>
      </button>
      <div className=" flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <button className="text-white bg-red-600 hover:bg-red-600/90 focus:ring-4 focus:outline-none focus:ring-red-600/50 font-medium rounded-lg px-5 py-3 space-x-3 text-center inline-flex items-center dark:focus:ring-red-600/55 me-2 text-base">
        <Trash />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default TableAction;
