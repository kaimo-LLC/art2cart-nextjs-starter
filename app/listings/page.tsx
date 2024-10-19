import api from "@/lib/art2cart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "art2cart";
import { TitleCard } from "@/components/TitleCard";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}) {
  const data = await api.getListing(cursor, limit);
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
  const listings = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        title="Listings"
        description="A list of listings in your account"
        showHome
      />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of listings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((design: Product) => (
              <TableRow key={design.id}>
                <TableCell>{design.id}</TableCell>
                <TableCell>{design.title}</TableCell>
                <TableCell>{design.tags}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
