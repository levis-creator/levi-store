import { Layers } from "lucide-react";
import { ReactElement } from "react";
import SquareCard from "./SquareCard";

export type Stats = {
  title: string;
  sales: number;
  color: string;
  icons?: ReactElement;
};

function SquareCards() {
  const ordersStats: Stats[] = [
    {
      title: "Today's Orders",
      sales: 110000,
      icons: <Layers />,
      color: "bg-green-600",
    },
    {
      title: "Yesterday's Orders",
      sales: 130000,
      icons: <Layers />,
      color: "bg-blue-600",
    },
    {
      title: "This Month",
      sales: 3000000,
      icons: <Layers />,
      color: "bg-orange-600",
    },
    {
      title: "All-Time Month ",
      sales: 30000000,
      icons: <Layers />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="py-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {ordersStats.map((stat, i) => (
        <SquareCard data={stat} key={i} />
      ))}
    </div>
  );
}

export default SquareCards;
