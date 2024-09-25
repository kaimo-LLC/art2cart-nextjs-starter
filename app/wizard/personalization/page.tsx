import Link from "next/link";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";
import { Button } from "@/components/ui/button";
import { BodyCard } from "@/components/BodyCard";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Step by step create a new job"
      />
      <WizardNav current={3} />
      <div className="mt-8">
        <BodyCard
          title="Personaliaztion"
          description="Select personalization data"
          footer="personalization selection"
        >
          <div></div>
        </BodyCard>
      </div>
      <div className="flex justify-between my-8">
        <div>
          <Button variant={"secondary"}>
            <Link href="/wizard/designs">Previous</Link>
          </Button>
        </div>
        <div className="space-x-4">
          <Button>
            <Link href="/wizard/listing">Next</Link>
          </Button>
          <ReviewPanel />
        </div>
      </div>
    </div>
  );
}
