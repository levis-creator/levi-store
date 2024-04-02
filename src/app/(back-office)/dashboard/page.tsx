import Heading from "@/components/back-office/Heading";
import DashBoardCharts from "@/components/back-office/charts/DashBoardCharts";
import RectangleCards from "@/components/back-office/rectanglecard/RectangleCards";
import SquareCards from "@/components/back-office/squarecard/SquareCards";
import CustomTable from "@/components/back-office/table/CustomTable";
import data from "@/components/back-office/table/mock-data.json";

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <SquareCards />
      {/* small cards */}
      <RectangleCards />
      {/* charts */}
      <DashBoardCharts />
      {/* Recent Order table */}
      <CustomTable head="Recent Orders" data={data} />
    </div>
  );
};

export default page;
