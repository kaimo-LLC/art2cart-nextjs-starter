import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createListingSlice,
  ListingSlice,
  createCatalogProductSlice,
  CatalogProductsSlice,
  createDesignsSlice,
  DesignsSlice,
  createChannelSlice,
  ChannelSlice,
  ConfigSlice,
  createConfigSlice,
} from "./slices";

export type WizardStore = ListingSlice &
  CatalogProductsSlice &
  DesignsSlice &
  ChannelSlice &
  ConfigSlice;

export const useWizardStore = create<WizardStore>()(
  persist(
    (...a) => ({
      ...createListingSlice(...a),
      ...createCatalogProductSlice(...a),
      ...createDesignsSlice(...a),
      ...createChannelSlice(...a),
      ...createConfigSlice(...a),
    }),
    { name: "wizard-store" }
  )
);
