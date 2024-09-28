"use client";
import { channelSdk } from "@/lib/art2cart";
import { useQuery } from "@tanstack/react-query";
import { Channel } from "art2cart";
import { useWizardStore } from "../../providers/useWizardStore";

export function useChannels({ channels }: { channels: Channel[] }) {
  const { selectedChannels, addSelectedChannel, removeSelectedChannel } =
    useWizardStore();

  const { data } = useQuery({
    queryKey: ["channels"],
    queryFn: () => channelSdk.getAllChannels(0, 10).then((res) => res.data),
    initialData: channels,
    retry: 0,
    refetchInterval: 1000,
  });

  const channelOptions = data;

  return {
    channelOptions,
    selectedChannels,
    addSelectedChannel,
    removeSelectedChannel,
  };
}
