import React from "react";
import data from "./mock-data.json";
import Table from "../Table";

const CustomTable = () => {
  return (
    <div className="py-8 ">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark-slate-50">
        Recent Orders
      </h2>
      {/* table */}
      <Table data={data} />
    </div>
  );
};

export default CustomTable;
