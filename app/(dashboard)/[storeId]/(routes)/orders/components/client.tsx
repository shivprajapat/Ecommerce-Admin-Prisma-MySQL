import React, { FC } from "react";
import { Separator } from "@/components/ui/separator";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { columns, OrderColumn } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}
const OrderClient: FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};

export default OrderClient;
