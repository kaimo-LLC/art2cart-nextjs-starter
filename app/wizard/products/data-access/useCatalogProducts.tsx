"use client";
import api from "@/lib/art2cart";
import { useQuery } from "@tanstack/react-query";
import { CatalogProduct } from "art2cart";
import { useWizardStore } from "../../providers/useWizardStore";

export function useCatalogProducts({
  products,
}: {
  products: CatalogProduct[];
}) {
  const { selectedProducts, addProduct, removeProduct } = useWizardStore();
  const { data } = useQuery({
    queryKey: ["designs"],
    queryFn: () =>
      api.getCatalog(0, 100).then((data) => {
        return data;
      }),
    initialData: products,
    retry: 0,
    refetchInterval: 1000,
  });
  const productOptions = data;
  return {
    productOptions,
    selectedProducts,
    addSelectedProduct: (product: CatalogProduct) => addProduct(product),
    removeSelectedProduct: (product: CatalogProduct) => removeProduct(product),
  };
}
