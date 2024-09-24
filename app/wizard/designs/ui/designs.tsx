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
import { TitleCard } from "@/components/TitleCard";
import { useDesigns } from "../data-access/useDesigns";

export function Designs({ designs }: { designs: Design[] }) {
  const { data } = useDesigns({ designs });
  return (
    <>
      <TitleCard title="Designs" description="Select designs for your order" />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of designs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Original File Name</TableHead>
              <TableHead>Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((design: Design) => (
              <TableRow key={design.id}>
                <TableCell>{design.title}</TableCell>
                <TableCell>{design.original_file_name}</TableCell>
                <TableCell>{design.tags}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
