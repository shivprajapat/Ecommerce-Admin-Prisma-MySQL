"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type BillboardColumn = {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "Image",
    cell: ({ row }) => (
      <div className="relative w-14 h-10 ">
        <Image
          src={row.original.imageUrl}
          className="object-contain"
          fill
          alt="/"
        />
      </div>
    ),
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
