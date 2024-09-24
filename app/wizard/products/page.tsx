import { catalogSdk } from "@/lib/art2cart";
import { CatalogProduct } from "art2cart";
import { Products } from "./ui/products";

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
      <Products products={products} />
    </div>
  );
}
