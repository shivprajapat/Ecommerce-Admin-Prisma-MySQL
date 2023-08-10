import React from "react";

import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import SizesClient from "./components/client";
import { SizeColumn } from "./components/columns";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <section className="section-padding">
      <SizesClient data={formattedSizes} />
    </section>
  );
};

export default SizesPage;
