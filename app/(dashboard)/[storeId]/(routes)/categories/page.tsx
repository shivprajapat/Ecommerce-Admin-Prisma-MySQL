import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import CategoriesClient from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <section className="section-padding">
      <CategoriesClient data={formattedCategories} />
    </section>
  );
};

export default CategoriesPage;
