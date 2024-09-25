import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Personalization"
        description="3. Select personalization data"
      />
      <WizardNav current={3} />
      <div className="mt-8"></div>
      <div className="flex justify-end mt-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
