import { create } from "zustand";
import {
  createListingSlice,
  ListingSlice,
  createCatalogProductSlice,
  CatalogProductsSlice,
  createDesignsSlice,
  DesignsSlice,
  createStoreSlice,
  StoresSlice,
} from "./slices";

export type WizardStore = ListingSlice &
  CatalogProductsSlice &
  DesignsSlice &
  StoresSlice;

export const useWizardStore = create<WizardStore>()((...a) => ({
  ...createListingSlice(...a),
  ...createCatalogProductSlice(...a),
  ...createDesignsSlice(...a),
  ...createStoreSlice(...a),
}));
