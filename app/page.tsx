import { catalogSdk } from "./lib/art2cart";
import { CatalogProduct } from "art2cart";

async function fetchProducts() {
  let { data } = await catalogSdk.getByTeam();
  if (!data) {
    return [];
  }
  return data;
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul>
        {products.map((post: CatalogProduct) => (
          <li key={post.id}>{post.code}</li>
        ))}
      </ul>
    </div>
  );
}
