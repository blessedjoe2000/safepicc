"use client";

import { Pencil } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <p>{formattedPrice}</p>;
    },
  },
  {
    header: "Status",
    accessorKey: "isPublished",
    cell: ({ row }) => {
      const isPublished = row.original.isPublished || false;
      return (
        <Badge className="bg-main-teal">
          {isPublished ? "Published" : "Unpublished"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Link
          href={`/admin/courses/${row.original.id}/basic`}
          className="flex gap-2 items-center hover:text-main-teal"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </Link>
      );
    },
  },
];
