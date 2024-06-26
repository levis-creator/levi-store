import Heading from "@/components/back-office/Heading";
import TableAction from "@/components/back-office/table/TableAction";
import { NavigationItem } from "@/lib/types";
import { Plus } from "lucide-react";

const page = () => {
  const additionalBtn: NavigationItem = {
    icons: <Plus />,
    title: "Add Staff",
    path: "/dashboard/staff/new",
  };
  return (
    <div>
      {/* header */}
      <Heading title="Staffs" additionalBtn={additionalBtn} />
      {/* table Actions*/}
      <TableAction />
    </div>
  );
};

export default page;
