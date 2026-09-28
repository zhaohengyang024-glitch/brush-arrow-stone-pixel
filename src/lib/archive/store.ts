import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CONFIG } from "@/lib/archive/content";
import type { AppId, ArchiveConfig } from "@/lib/archive/types";
import { toISODate, yesterdayISO } from "@/lib/archive/time";

type ArchiveState = {
  unlocked: boolean;
  bootSeen: boolean;
  openApp: AppId | null;
  visits: number;
  visitLog: string[];
  lastVisit: string;
  streak: number;
  lastStreakDate: string;
  unlockedSecrets: Record<string, boolean>;
  claimedCoupons: Record<string, boolean>;
  usedCoupons: Record<string, boolean>;
  completedPlans: Record<string, string>;
  openedCapsules: Record<string, boolean>;
  revealedPhotos: Record<string, boolean>;
  seenBirthdayYear: number;
  fortuneDate: string;
  fortuneIndex: number;
  reply: string;
  replySaved: boolean;
  hiddenUnlocked: boolean;
  config: ArchiveConfig;
  unlock: () => void;
  reseal: () => void;
  setOpenApp: (id: AppId | null) => void;
  markBootSeen: () => void;
  recordVisit: () => void;
  revealSecret: (id: string) => void;
  claimCoupon: (id: string) => void;
  useCoupon: (id: string) => void;
  togglePlan: (id: string) => void;
  openCapsule: (id: string) => void;
  revealPhoto: (id: string) => void;
  markBirthdaySeen: (year: number) => void;
  setFortune: (index: number, date: string) => void;
  setReply: (value: string) => void;
  saveReply: () => void;
  unlockHidden: () => void;
  patchConfig: (patch: Partial<ArchiveConfig>) => void;
  resetProgress: () => void;
};

export const useArchive = create<ArchiveState>()(
  persist(
    (set) => ({
      unlocked: false,
      bootSeen: false,
      openApp: null,
      visits: 0,
      visitLog: [],
      lastVisit: "",
      streak: 0,
      lastStreakDate: "",
      unlockedSecrets: {},
      claimedCoupons: {},
      usedCoupons: {},
      completedPlans: {},
      openedCapsules: {},
      revealedPhotos: {},
      seenBirthdayYear: 0,
      fortuneDate: "",
      fortuneIndex: 0,
      reply: "",
      replySaved: false,
      hiddenUnlocked: false,
      config: DEFAULT_CONFIG,
      unlock: () => set({ unlocked: true }),
      reseal: () => set({ unlocked: false, openApp: null }),
      setOpenApp: (id) => set({ openApp: id }),
      markBootSeen: () => set({ bootSeen: true }),
      recordVisit: () =>
        set((s) => {
          const today = toISODate(new Date());
          const last = s.lastStreakDate;
          let streak = s.streak;
          if (last === today) {
            streak = Math.max(1, streak);
          } else if (last === yesterdayISO(today)) {
            streak = streak + 1;
          } else {
            streak = 1;
          }
          return {
            visits: s.visits + 1,
            visitLog: [...s.visitLog, new Date().toISOString()].slice(-120),
            lastVisit: new Date().toISOString(),
            streak,
            lastStreakDate: today,
          };
        }),
      revealSecret: (id) =>
        set((s) => ({
          unlockedSecrets: { ...s.unlockedSecrets, [id]: true },
        })),
      claimCoupon: (id) =>
        set((s) => ({
          claimedCoupons: { ...s.claimedCoupons, [id]: true },
        })),
      useCoupon: (id) =>
        set((s) => ({
          usedCoupons: { ...s.usedCoupons, [id]: true },
          claimedCoupons: { ...s.claimedCoupons, [id]: true },
        })),
      togglePlan: (id) =>
        set((s) => {
          const next = { ...s.completedPlans };
          if (next[id]) delete next[id];
          else next[id] = toISODate(new Date());
          return { completedPlans: next };
        }),
      openCapsule: (id) =>
        set((s) => ({
          openedCapsules: { ...s.openedCapsules, [id]: true },
        })),
      revealPhoto: (id) =>
        set((s) => ({
          revealedPhotos: { ...s.revealedPhotos, [id]: true },
        })),
      markBirthdaySeen: (year) => set({ seenBirthdayYear: year }),
      setFortune: (index, date) => set({ fortuneIndex: index, fortuneDate: date }),
      setReply: (value) => set({ reply: value, replySaved: false }),
      saveReply: () => set({ replySaved: true }),
      unlockHidden: () => set({ hiddenUnlocked: true }),
      patchConfig: (patch) =>
        set((s) => ({ config: { ...s.config, ...patch } })),
      resetProgress: () =>
        set({
          unlocked: false,
          bootSeen: false,
          openApp: null,
          unlockedSecrets: {},
          claimedCoupons: {},
          usedCoupons: {},
          completedPlans: {},
          openedCapsules: {},
          revealedPhotos: {},
          seenBirthdayYear: 0,
          fortuneDate: "",
          fortuneIndex: 0,
          reply: "",
          replySaved: false,
          hiddenUnlocked: false,
        }),
    }),
    { name: "yuni-os-v1", skipHydration: true },
  ),
);
