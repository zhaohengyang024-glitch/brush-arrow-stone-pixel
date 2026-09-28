export type ArchiveConfig = {
  herName: string;
  hisName: string;
  startISO: string;
  birthdayISO: string;
  birthdayLabel: string;
  lockQuestion: string;
  lockAnswer: string;
  keyword: string;
  letter: string;
  promise: string;
  hiddenLetter: string;
};

export type TimelineEvent = {
  id: string;
  date: string;
  hash: string;
  commit: string;
  plus: string[];
  body: string;
  branch: string;
  image?: string;
  mood?: string;
};

export type Photo = {
  id: string;
  date: string;
  title: string;
  place: string;
  mood: string;
  caption: string;
  unsaid: string;
  image: string;
  tags: string[];
};

export type Secret = {
  id: string;
  title: string;
  body: string;
};

export type Place = {
  id: string;
  city: string;
  lit: boolean;
  date?: string;
  event?: string;
  weather?: string;
  steps?: string;
  food?: string;
  impression?: string;
  image?: string;
};

export type Coupon = {
  id: string;
  title: string;
  body: string;
};

export type Plan = {
  id: string;
  title: string;
  body: string;
};

export type Capsule = {
  id: string;
  title: string;
  unlockISO?: string;
  unlockAfterDays?: number;
  preview: string;
  body: string;
};

export type DictEntry = {
  id: string;
  word: string;
  pos: string;
  def: string;
  usage: string;
  related: string;
};

export type Achievement = {
  id: string;
  title: string;
  body: string;
  requireDays?: number;
  requireEvent?: string;
  hidden?: boolean;
};

export type AudioClip = {
  id: string;
  title: string;
  note: string;
  src?: string;
};

export type AppId =
  | "letter"
  | "timeline"
  | "album"
  | "stats"
  | "secrets"
  | "replay"
  | "random"
  | "map"
  | "coupons"
  | "plans"
  | "capsules"
  | "dictionary"
  | "weather"
  | "achievements"
  | "audio"
  | "birthday"
  | "fortune"
  | "settings";
