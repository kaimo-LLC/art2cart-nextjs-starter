import { catalogSdk } from "./lib/art2cart";
import { CatalogProduct } from "art2cart";

export default async function Home() {
  let { data } = await catalogSdk.getByTeam();

  if (!data) {
    return <></>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul>
        {data.map((post: CatalogProduct) => (
          <li key={post.id}>{post.code}</li>
        ))}
      </ul>
    </div>
  );
}
