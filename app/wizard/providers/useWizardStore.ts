import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createListingSlice,
  ListingSlice,
  createCatalogProductSlice,
  CatalogProductsSlice,
  createDesignsSlice,
  DesignsSlice,
  createStoreSlice,
  StoresSlice,
  ConfigSlice,
  createConfigSlice,
} from "./slices";

export type WizardStore = ListingSlice &
  CatalogProductsSlice &
  DesignsSlice &
  StoresSlice &
  ConfigSlice;

export const useWizardStore = create<WizardStore>()(
  persist(
    (...a) => ({
      ...createListingSlice(...a),
      ...createCatalogProductSlice(...a),
      ...createDesignsSlice(...a),
      ...createStoreSlice(...a),
      ...createConfigSlice(...a),
    }),
    { name: "wizard-store" }
  )
);
