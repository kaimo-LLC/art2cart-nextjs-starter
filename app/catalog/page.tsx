import { catalogSdk } from "@/lib/art2cart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TitleCard } from "@/components/TitleCard";
import { CatalogProduct } from "art2cart";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}) {
  const { data } = await catalogSdk.getByTeam(cursor, limit);
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
  const products = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        title="Catalog Products"
        description=" A list of catalog products in your account"
      />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of catalog products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: CatalogProduct) => (
              <TableRow key={product.id}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.model}</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
