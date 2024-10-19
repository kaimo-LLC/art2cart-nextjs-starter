"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PersonalizationCategory } from "art2cart";

export function Categories({
  categories,
}: {
  categories: PersonalizationCategory[];
}) {
  return (
    <Table>
      <TableCaption>A list of personalization categories</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category: PersonalizationCategory) => (
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>
              <Link href={`/wizard/personalization?category=${category.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
