import React from "react";

import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import { BillboardColumn } from "./components/columns";
import { format } from "date-fns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    imageUrl: item.imageUrl,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <section className="section-padding">
      <BillboardClient data={formattedBillboards} />
    </section>
  );
};

export default BillboardsPage;
