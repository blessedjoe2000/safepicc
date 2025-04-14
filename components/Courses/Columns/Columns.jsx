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
        <Badge className={isPublished ? "bg-main-green" : "bg-main-red"}>
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

export const registration_columns = [
  {
    accessorKey: "responses.name",
    header: "Name",
  },
  {
    accessorKey: "responses.email",
    header: "Email",
  },
  {
    accessorKey: "title",
    header: "Course Title",
  },
  {
    accessorKey: "startTime",
    header: "Date & Time",
    cell: ({ row }) => {
      const dateTimeISO = row.original.startTime;
      const dateObj = new Date(dateTimeISO);

      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      });

      const formattedTime = dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      return <p>{`${formattedDate} ${formattedTime}`}</p>;
    },
  },
  {
    header: "Payment Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          className={status === "ACCEPTED" ? "bg-main-green" : "bg-main-red"}
        >
          {status}
        </Badge>
      );
    },
  },
];
