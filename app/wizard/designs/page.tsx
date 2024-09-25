import { designSdk } from "@/lib/art2cart";
import { Design } from "art2cart";
import { Designs } from "./ui/designs";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";

async function fetchData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}): Promise<Design[]> {
  const { data } = await designSdk.getAllDesigns(cursor, limit);
  if (!data) {
    return [];
  }
  return data;
}

export default async function Page() {
  const designs = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Designs"
        description="2. Select designs for your order"
      />
      <WizardNav current={2} />
      <div className="mt-8">
        <Designs designs={designs} />
      </div>
      <div className="flex justify-end mt-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
