"use client";
import usePagination from "@/hooks/usePagination";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Table = ({ data }: { data: any[] }) => {
  const heads = Object.keys(data[0]);
  const { pageCount, changePage, pageData, startEnd } = usePagination(data, 10);
  const pgeData = pageData();

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg z-0">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {heads.map((head: string, i: number) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pgeData.map((item: any, i: number) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {heads.map((head: string, i: number) => (
                <td key={i} className="px-6 py-4">
                  {item[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* bottom bar area */}
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {startEnd.current.startIndex + 1}-{startEnd.current.endIndex}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.length}
          </span>
        </span>
        <ReactPaginate
          pageCount={pageCount}
          className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8"
          pageLinkClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          previousLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          nextLinkClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          activeLinkClassName="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          pageRangeDisplayed={3}
          onPageChange={(e) => changePage(e.selected)}
        />
      </nav>
    </div>
  );
};

export default Table;
