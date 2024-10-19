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
import { Channel, Design } from "art2cart";
import { TitleCard } from "@/components/TitleCard";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}) {
  const data = await api.getChannels(cursor, limit);
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
  const channels = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        title="Channels"
        description="A list of channels in your account"
        showHome
      />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of channels</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {channels.map((channel: Channel) => (
              <TableRow key={channel.id}>
                <TableCell>{channel.id}</TableCell>
                <TableCell>{channel.title}</TableCell>
                <TableCell>{channel.tags}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
