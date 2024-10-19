"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PersonalizationItem } from "art2cart";

export function Items({ items }: { items: PersonalizationItem[] }) {
  return (
    <Table>
      <TableCaption>A list of personalization items</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item: PersonalizationItem) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
