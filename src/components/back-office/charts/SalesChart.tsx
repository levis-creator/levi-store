"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  type Tabs = {
    title: string;
    type: string;
  };
  const tabs: Tabs[] = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];
  const [chartsDisplay, setChartDisplay] = useState<string>(tabs[0].type);

  return (
    <div className="bg-white shadow-lg text-slate-800 dark:text-slate-50 dark:bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Charts</h2>
      <div className="p-4">
        {/* tabs  */}

        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setChartDisplay(tab.type)}
                  className={`${
                    chartsDisplay == tab.type
                      ? "text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500"
                      : "border-transparent text-slate-500 "
                  }inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* content */}
        {tabs.map((tab, i) =>
          chartsDisplay == tab.type ? (
            <div key={i}>
              <Line options={options} data={data} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SalesChart;
