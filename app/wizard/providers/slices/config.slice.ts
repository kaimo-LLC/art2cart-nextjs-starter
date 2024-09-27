import { StateCreator } from "zustand";

interface Config {
  product_catalog: boolean;
  design_library: boolean;
  design_placement: boolean;
  personalization: boolean;
  listing_details: boolean;
  channels: boolean;
}

export interface ConfigSlice {
  config: Config;
  setConfig: (config: Config) => void;
}

export const createConfigSlice: StateCreator<ConfigSlice> = (set) => ({
  config: {
    product_catalog: true,
    design_library: true,
    design_placement: true,
    personalization: true,
    listing_details: true,
    channels: true,
  },
  setConfig: (config) => set(() => ({ config: config })),
});
