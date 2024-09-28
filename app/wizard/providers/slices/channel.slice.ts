import { StateCreator } from "zustand";
import { Channel } from "art2cart";

export interface ChannelSlice {
  selectedChannels: Channel[];
  addChannel: (channel: Channel) => void;
  removeChannel: (channel: Channel) => void;
}

export const createChannelSlice: StateCreator<ChannelSlice> = (set) => ({
  selectedChannels: [],
  addChannel: (channel) =>
    set((state) => ({
      selectedChannels: [...state.selectedChannels, channel],
    })),
  removeChannel: (channel) =>
    set((state) => ({
      selectedChannels: [...state.selectedChannels, channel],
    })),
});
