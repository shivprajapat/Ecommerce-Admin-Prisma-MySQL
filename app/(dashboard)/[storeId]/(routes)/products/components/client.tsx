"use client";
import React, { FC } from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductsClientProps {
  data: ProductColumn[];
}
export const ProductsClient: FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
      <Heading title={`Products (${data.length})`} description="Manage products for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <div className="pb-2">
      <Heading title="API" description="API Calls for Products" />
      </div>
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </div>
  );
};
