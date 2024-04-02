import React from "react";
import Table from "./Table";

const CustomTable: React.FC<{
  head: string;
  data: any[];
}> = ({ head, data }) => {
  return (
    <div className="py-8 ">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">
        {head}
      </h2>
      {/* table */}
      <Table data={data} />
    </div>
  );
};

export default CustomTable;
