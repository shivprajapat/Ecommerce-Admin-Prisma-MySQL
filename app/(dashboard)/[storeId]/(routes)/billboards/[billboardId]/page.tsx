import React from "react";
import BillboardForm from "./components/billboard-form";
import prismadb from "@/lib/prismadb";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div>
      <BillboardForm initialData={billboard} />
    </div>
  );
};

export default BillboardPage;
