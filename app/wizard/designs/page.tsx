import { designSdk } from "@/lib/art2cart";
import { Design } from "art2cart";
import { Designs } from "./ui/designs";

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
      <Designs designs={designs} />
    </div>
  );
}
