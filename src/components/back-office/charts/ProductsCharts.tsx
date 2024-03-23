"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductsCharts = () => {
  const data = {
    labels: ["maize", "Rainbow Charge", "Cabbage", "Watermelon"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: ["#F9C80E", "#EA3546", "#662E9B", "#F86624"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white shadow-lg text-slate-800 dark:text-slate-50 dark:bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      {/* chart */}
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ProductsCharts;
