import { AlbumApp } from "@/components/os/apps/album";
import { BirthdayApp } from "@/components/os/apps/birthday";
import { CouponsApp } from "@/components/os/apps/coupons";
import {
  AchievementsApp,
  AudioApp,
  DictionaryApp,
} from "@/components/os/apps/extras";
import { CapsulesApp, PlansApp } from "@/components/os/apps/future";
import { LetterApp } from "@/components/os/apps/letter";
import { MapApp } from "@/components/os/apps/map";
import { RandomApp } from "@/components/os/apps/random";
import { ReplayApp } from "@/components/os/apps/replay";
import { SecretsApp } from "@/components/os/apps/secrets";
import { SettingsApp } from "@/components/os/apps/settings";
import { FortuneApp, StatsApp, WeatherApp } from "@/components/os/apps/stats";
import { TimelineApp } from "@/components/os/apps/timeline";
import type { AppId } from "@/lib/archive/types";
import type { ReactNode } from "react";

export function renderApp(
  id: AppId,
  helpers: { playBirthday: () => void },
): ReactNode {
  switch (id) {
    case "letter":
      return <LetterApp />;
    case "timeline":
      return <TimelineApp />;
    case "album":
      return <AlbumApp />;
    case "stats":
      return <StatsApp />;
    case "secrets":
      return <SecretsApp />;
    case "replay":
      return <ReplayApp />;
    case "random":
      return <RandomApp />;
    case "map":
      return <MapApp />;
    case "coupons":
      return <CouponsApp />;
    case "plans":
      return <PlansApp />;
    case "capsules":
      return <CapsulesApp />;
    case "dictionary":
      return <DictionaryApp />;
    case "weather":
      return <WeatherApp />;
    case "achievements":
      return <AchievementsApp />;
    case "audio":
      return <AudioApp />;
    case "birthday":
      return <BirthdayApp onPlay={helpers.playBirthday} />;
    case "fortune":
      return <FortuneApp />;
    case "settings":
      return <SettingsApp />;
  }
}
