import { catalogSdk } from "./lib/art2cart";
import { CatalogProduct } from "art2cart";
import { PreviewImage } from "@/app/components";

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
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: CatalogProduct) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-800 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <div className="h-16 w-16">
                  <PreviewImage
                    image={product.preview_image}
                    name={`${product.name}`}
                    bucket={process.env.NEXT_PUBLIC_AWS_TEMPLATES_BUCKET}
                    height={56}
                    width={56}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
