import { useCallback, useEffect, useState } from "react";
import { BirthdayDrama } from "@/components/os/apps/birthday";
import { BootScreen } from "@/components/os/boot";
import { Desktop } from "@/components/os/desktop";
import { EasterEggs } from "@/components/os/easter-eggs";
import { LockScreen } from "@/components/os/lock-screen";
import { useArchive } from "@/lib/archive/store";
import { isBirthdayToday } from "@/lib/archive/time";

export function OsApp() {
  const unlocked = useArchive((s) => s.unlocked);
  const bootSeen = useArchive((s) => s.bootSeen);
  const markBootSeen = useArchive((s) => s.markBootSeen);
  const recordVisit = useArchive((s) => s.recordVisit);
  const birthdayISO = useArchive((s) => s.config.birthdayISO);
  const seenBirthdayYear = useArchive((s) => s.seenBirthdayYear);
  const markBirthdaySeen = useArchive((s) => s.markBirthdaySeen);
  const [drama, setDrama] = useState(false);

  const showBoot = unlocked && !bootSeen;

  useEffect(() => {
    void useArchive.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const key = "yuni-os-visit-session";
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    recordVisit();
  }, [unlocked, recordVisit]);

  useEffect(() => {
    if (!unlocked || showBoot || drama) return;
    const year = new Date().getFullYear();
    if (isBirthdayToday(birthdayISO) && seenBirthdayYear !== year) {
      setDrama(true);
    }
  }, [unlocked, showBoot, drama, birthdayISO, seenBirthdayYear]);

  const finishBoot = useCallback(() => {
    markBootSeen();
  }, [markBootSeen]);

  const finishDrama = useCallback(() => {
    setDrama(false);
    markBirthdaySeen(new Date().getFullYear());
  }, [markBirthdaySeen]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {!unlocked ? (
        <LockScreen />
      ) : showBoot ? (
        <BootScreen onDone={finishBoot} />
      ) : drama ? (
        <BirthdayDrama onDone={finishDrama} />
      ) : (
        <Desktop onBirthday={() => setDrama(true)} />
      )}
      <EasterEggs />
    </div>
  );
}
