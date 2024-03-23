import React from "react";
import RectangleCard from "./RectangleCard";
import { Stats } from "../squarecard/SquareCards";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

const RectangleCards = () => {
  const ordersStats: Stats[] = [
    {
      title: "Total Orders",
      sales: 500,
      icons: <ShoppingCart />,
      color: "bg-green-600",
    },
    {
      title: "Pending Orders",
      sales: 100,
      color: "bg-blue-600",
      icons: <Loader2 />,
    },
    {
      title: "Orders Processing",
      sales: 200,
      color: "bg-orange-600",
      icons: <RefreshCcw />,
    },
    {
      title: "Orders Delivered ",
      sales: 300,
      color: "bg-purple-600",
      icons: <CheckCheck />,
    },
  ];

  return (
    <div className="pb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {ordersStats.map((stat, i) => (
        <RectangleCard data={stat} key={i} />
      ))}
    </div>
  );
};

export default RectangleCards;
