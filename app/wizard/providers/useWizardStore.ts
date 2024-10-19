import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createListingSlice,
  ListingSlice,
  createCatalogProductSlice,
  CatalogProductsSlice,
  createPersonalizationCategorySlice,
  PersonalizationCategorySlice,
  createDesignsSlice,
  DesignsSlice,
  createChannelSlice,
  ChannelSlice,
  ConfigSlice,
  createConfigSlice,
} from "./slices";

export type WizardStore = ListingSlice &
  CatalogProductsSlice &
  PersonalizationCategorySlice &
  DesignsSlice &
  ChannelSlice &
  ConfigSlice;

export const useWizardStore = create<WizardStore>()(
  persist(
    (...a) => ({
      ...createListingSlice(...a),
      ...createCatalogProductSlice(...a),
      ...createPersonalizationCategorySlice(...a),
      ...createDesignsSlice(...a),
      ...createChannelSlice(...a),
      ...createConfigSlice(...a),
    }),
    { name: "wizard-store" }
  )
);
