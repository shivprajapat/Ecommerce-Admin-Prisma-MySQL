import React, { FC } from "react";

import prismadb from "@/lib/prismadb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
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
        <div className="pb-1">
          <Heading title="Dashboard" description="Overview of your store" />
        </div>
        <Separator />
        <p>Active Store:{store?.name}</p>
      </div>
    </section>
  );
};

export default DashboardPage;
