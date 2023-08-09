"use client";
import React, { FC } from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CategoriesClientProps {
  data: CategoryColumn[];
}
const CategoriesClient: FC<CategoriesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <div className="pb-2">
        <Heading title="API" description="API Calls for Categories" />
      </div>
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </div>
  );
};

export default CategoriesClient;
