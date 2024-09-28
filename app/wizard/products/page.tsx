import Link from "next/link";
import { catalogSdk } from "@/lib/art2cart";
import { CatalogProduct } from "art2cart";
import { Products } from "./ui/products";
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
}): Promise<CatalogProduct[]> {
  const { data } = await catalogSdk.getAllCatalogProducts(cursor, limit);
  if (!data) {
    return [];
  }
  return data;
}

export default async function Page() {
  const products = await fetchData({ cursor: 0, limit: 10 });
  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Create a new job, step by step"
      />
      <WizardNav current={"products"} />
      <div className="mt-8">
        <BodyCard
          title="Catalog Products"
          description="Select catalog products"
          footer="product selection"
        >
          <Products products={products} />
        </BodyCard>
      </div>
      <div className="flex justify-end my-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
