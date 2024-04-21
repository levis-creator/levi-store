import Heading from "@/components/back-office/Heading";
import TableAction from "@/components/back-office/table/TableAction";
import { NavigationItem } from "@/lib/types";
import { Plus } from "lucide-react";

const page = () => {
  const additionalBtn: NavigationItem = {
    icons: <Plus />,
    title: "Add Training",
    path: "/dashboard/community/new",
  };
  return (
    <div>
      {/* header */}
      <Heading title="Community" additionalBtn={additionalBtn} />
      {/* table Actions*/}
      <TableAction />

      {/* table */}
    </div>
  );
};

export default page;
