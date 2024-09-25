import Link from "next/link";
import { designSdk } from "@/lib/art2cart";
import { Design } from "art2cart";
import { Designs } from "./ui/designs";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";
import { Button } from "@/components/ui/button";
import { BodyCard } from "@/components/BodyCard";

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
        title="Wizard"
        description="Step by step create a new job"
      />
      <WizardNav current={2} />
      <div className="mt-8">
        <BodyCard
          title="Designs"
          description="Select designs"
          footer="design selection"
        >
          <Designs designs={designs} />
        </BodyCard>
      </div>
      <div className="flex justify-between my-8">
        <div>
          <Button variant={"secondary"}>
            <Link href="/wizard/products">Previous</Link>
          </Button>
        </div>
        <div className="space-x-4">
          <Button>
            <Link href="/wizard/personalization">Next</Link>
          </Button>
          <ReviewPanel />
        </div>
      </div>
    </div>
  );
}
