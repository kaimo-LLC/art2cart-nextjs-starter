import { StateCreator } from "zustand";

export type Config = {
  [key: string]: boolean;
};

export interface ConfigSlice {
  config: Config;
  setConfig: (config: Config) => void;
}

export const createConfigSlice: StateCreator<ConfigSlice> = (set) => ({
  config: {
    products: true,
    designs: true,
    personalization: true,
    listing: true,
    channels: true,
  },
  setConfig: (config) => set(() => ({ config: config })),
});
