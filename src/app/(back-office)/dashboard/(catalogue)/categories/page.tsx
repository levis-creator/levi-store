import Heading from "@/components/back-office/Heading";
import TableAction from "@/components/back-office/table/TableAction";
import { NavigationItem } from "@/lib/types";
import { Plus } from "lucide-react";

const page = () => {
  const additionalBtn: NavigationItem = {
    icons: <Plus />,
    title: "Add Category",
    path: "/dashboard/categories/new",
  };
  return (
    <div>
      {/* header */}
      <Heading title="Category" additionalBtn={additionalBtn} />
      {/* table Actions*/}
      <TableAction />

      {/* table */}
    </div>
  );
};

export default page;
