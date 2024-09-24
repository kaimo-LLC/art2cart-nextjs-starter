import { StateCreator } from "zustand";
import { CatalogProduct } from "art2cart";

export interface CatalogProductsSlice {
  selectedProducts: CatalogProduct[];
  addProduct: (product: CatalogProduct) => void;
  removeProduct: (product: CatalogProduct) => void;
}

export const createCatalogProductSlice: StateCreator<CatalogProductsSlice> = (
  set
) => ({
  selectedProducts: [],
  addProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
  removeProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
});
