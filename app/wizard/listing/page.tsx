import Link from "next/link";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";
import { Button } from "@/components/ui/button";
import { BodyCard } from "@/components/BodyCard";
import { ListingDetails } from "./ui/ListingDetails";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Create a new job, step by step"
      />
      <WizardNav current={"listing"} />
      <div className="mt-8">
        <BodyCard
          title="Listing"
          description="Set listing details"
          footer="listing configuration"
        >
          <ListingDetails />
        </BodyCard>
      </div>
      <div className="flex justify-end my-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
