import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CONFIG, type GiftConfig } from "@/lib/gift-content";

type GiftState = {
  opened: boolean;
  chapter: number;
  flipped: Record<string, boolean>;
  revealed: Record<string, boolean>;
  unwrapped: Record<string, boolean>;
  reply: string;
  replySaved: boolean;
  secretPassed: boolean;
  config: GiftConfig;
  open: () => void;
  setChapter: (n: number) => void;
  toggleFlip: (id: string) => void;
  revealWish: (id: string) => void;
  unwrap: (id: string) => void;
  setReply: (value: string) => void;
  saveReply: () => void;
  patchConfig: (patch: Partial<GiftConfig>) => void;
  reseal: () => void;
  resetProgress: () => void;
};

export const useGift = create<GiftState>()(
  persist(
    (set) => ({
      opened: false,
      chapter: 0,
      flipped: {},
      revealed: {},
      unwrapped: {},
      reply: "",
      replySaved: false,
      secretPassed: false,
      config: DEFAULT_CONFIG,
      open: () => set({ opened: true, chapter: 0 }),
      setChapter: (n) => set({ chapter: n }),
      toggleFlip: (id) =>
        set((s) => ({ flipped: { ...s.flipped, [id]: !s.flipped[id] } })),
      revealWish: (id) =>
        set((s) => ({ revealed: { ...s.revealed, [id]: true } })),
      unwrap: (id) =>
        set((s) => ({ unwrapped: { ...s.unwrapped, [id]: true } })),
      setReply: (value) => set({ reply: value, replySaved: false }),
      saveReply: () => set({ replySaved: true }),
      patchConfig: (patch) =>
        set((s) => ({ config: { ...s.config, ...patch } })),
      reseal: () =>
        set({
          opened: false,
          chapter: 0,
          secretPassed: false,
        }),
      resetProgress: () =>
        set({
          opened: false,
          chapter: 0,
          flipped: {},
          revealed: {},
          unwrapped: {},
          reply: "",
          replySaved: false,
          secretPassed: false,
        }),
    }),
    { name: "yuni-gift-v1" },
  ),
);
