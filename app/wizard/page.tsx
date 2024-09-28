import { TitleCard } from "@/components/TitleCard";
import { BodyCard } from "@/components/BodyCard";

import { FeatureSelector } from "./ui/FeatureSelector";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Create a new job, step by step"
      />
      <div className="mt-8">
        <BodyCard
          title="Configure"
          description="Select which tools you would like to use"
        >
          <FeatureSelector />
        </BodyCard>
      </div>
    </div>
  );
}
