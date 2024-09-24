import { TitleCard } from "@/components/TitleCard";

export default async function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Step by step create a new job"
      />
    </div>
  );
}
