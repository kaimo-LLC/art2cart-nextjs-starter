import { designSdk } from "@/lib/art2cart";
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

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}) {
  const { data } = await designSdk.getAllDesigns(cursor, limit);
  if (!data) {
    return [];
  }
  return data;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { search: string };
}) {
  const designs = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        title="Designs"
        description="A list of designs in your account"
        showHome
      />
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
            {designs.map((design: Design) => (
              <TableRow key={design.id}>
                <TableCell>{design.title}</TableCell>
                <TableCell>{design.original_file_name}</TableCell>
                <TableCell>{design.tags}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
