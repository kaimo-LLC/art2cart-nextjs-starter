// app/posts.jsx
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
import { Design } from "art2cart";
import { useDesigns } from "../data-access/useDesigns";

export function Designs({ designs }: { designs: Design[] }) {
  const { designOptions, addSelectedDesign, removeSelectedDesign } = useDesigns(
    { designs }
  );
  return (
    <Table>
      <TableCaption>A list of designs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Original File Name</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {designOptions.map((design: Design) => (
          <TableRow key={design.id}>
            <TableCell>{design.id}</TableCell>
            <TableCell>{design.title}</TableCell>
            <TableCell>{design.original_file_name}</TableCell>
            <TableCell>{design.tags}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
