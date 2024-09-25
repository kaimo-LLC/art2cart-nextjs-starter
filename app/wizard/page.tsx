import { TitleCard } from "@/components/TitleCard";
import { Button } from "@/components/ui/button";
import { WizardNav } from "./ui/WizardNav";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Step by step create a new job"
      />
      <WizardNav current={0} />
      <div className="flex justify-end my-8">
        <Button>
          <Link href="/wizard/products">Let's Go!</Link>
        </Button>
      </div>
    </div>
  );
}
