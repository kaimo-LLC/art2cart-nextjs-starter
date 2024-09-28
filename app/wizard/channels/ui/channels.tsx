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
import { Channel } from "art2cart";
import { useChannels } from "../data-access/useChannels";

export function Channels({ channels }: { channels: Channel[] }) {
  const { channelOptions, addSelectedChannel, removeSelectedChannel } =
    useChannels({ channels });
  return (
    <Table>
      <TableCaption>A list of designs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {channelOptions.map((channel: Channel) => (
          <TableRow key={channel.id}>
            <TableCell>{channel.id}</TableCell>
            <TableCell>{channel.title}</TableCell>
            <TableCell>{channel.tags}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
