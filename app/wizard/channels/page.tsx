import { channelSdk } from "@/lib/art2cart";
import { Channel } from "art2cart";
import { Channels } from "./ui/channels";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";
import { BodyCard } from "@/components/BodyCard";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}): Promise<Channel[]> {
  const { data } = await channelSdk.getAllChannels(cursor, limit);
  if (!data) {
    return [];
  }
  return data;
}

export default async function Page() {
  const channels = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Create a new job, step by step"
      />
      <WizardNav current={"channels"} />
      <div className="mt-8">
        <BodyCard title="Channels" description="Select channels">
          <Channels channels={channels} />
        </BodyCard>
      </div>
      <div className="flex justify-end my-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
