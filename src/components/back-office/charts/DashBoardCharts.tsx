import React from "react";
import SalesChart from "./SalesChart";
import ProductsCharts from "./ProductsCharts";

const DashBoardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* sales chart */}
      <SalesChart />
      {/* Products charts */}
      <ProductsCharts />
    </div>
  );
};

export default DashBoardCharts;
