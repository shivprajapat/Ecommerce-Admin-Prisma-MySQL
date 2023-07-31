import prismadb from "@/lib/prismadb";
import React, { FC } from "react";
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
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p>Active Store:{store?.name}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
