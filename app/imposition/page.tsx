import { impositionSdk } from "@/lib/art2cart";
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
import { ImpositionTemplate } from "art2cart";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}) {
  const { data } = await impositionSdk.getAllImpositionTemplates(cursor, limit);
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
  const imposition = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        title="Imposition"
        description=" A list of imposition templates in your account"
        showHome
      />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of imposition templates</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {imposition.map((impo: ImpositionTemplate) => (
              <TableRow key={impo.id}>
                <TableCell>{impo.id}</TableCell>
                <TableCell>{impo.name}</TableCell>
                <TableCell>{impo.tags}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
