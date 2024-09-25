import { catalogSdk } from "@/lib/art2cart";
import { CatalogProduct } from "art2cart";
import { Products } from "./ui/products";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";

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
        title="Catalog Products"
        description="1. Select products for your order"
      />
      <WizardNav current={1} />
      <div className="mt-8">
        <Products products={products} />
      </div>
      <div className="flex justify-end mt-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
