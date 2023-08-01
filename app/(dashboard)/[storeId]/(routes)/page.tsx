import React, { FC } from "react";

import prismadb from "@/lib/prismadb";
import { Heading } from "@/components/ui/heading";
interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage: FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <section className="section-padding">
      <div>
      <Heading title="Dashboard" description="Overview of your store" />
        <p>Active Store:{store?.name}</p>
      </div>
    </section>
  );
};

export default DashboardPage;
