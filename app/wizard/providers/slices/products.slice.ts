import { StateCreator } from "zustand";
import { CatalogProduct } from "art2cart";

export interface CatalogProductsSlice {
  products: CatalogProduct[];
  addProduct: (product: CatalogProduct) => void;
  removeProduct: (product: CatalogProduct) => void;
}

export const createCatalogProductSlice: StateCreator<CatalogProductsSlice> = (
  set
) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
});
