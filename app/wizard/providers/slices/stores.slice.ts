import { StateCreator } from "zustand";
import { Store } from "art2cart";

export interface StoresSlice {
  stores: Store[];
  addStore: (design: Store) => void;
  removeStore: (design: Store) => void;
}

export const createStoreSlice: StateCreator<StoresSlice> = (set) => ({
  stores: [],
  addStore: (store) => set((state) => ({ stores: [...state.stores, store] })),
  removeStore: (store) =>
    set((state) => ({ stores: [...state.stores, store] })),
});
