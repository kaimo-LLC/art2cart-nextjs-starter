import api from "@/lib/art2cart";
import { Design } from "art2cart";
import { Designs } from "./ui/designs";
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
}): Promise<Design[]> {
  const data = await api.getDesigns(cursor, limit);
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
        title="Wizard"
        description="Create a new job, step by step"
      />
      <WizardNav current={"designs"} />
      <div className="mt-8">
        <BodyCard title="Designs" description="Select designs">
          <Designs designs={designs} />
        </BodyCard>
      </div>
      <div className="flex justify-end my-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
