import { useEffect, useMemo } from "react";
import { APP_CATALOG, SYSTEM_QUOTES } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { elapsedSince, isBirthdayToday } from "@/lib/archive/time";
import { useNow } from "@/lib/archive/use-now";
import { WindowFrame } from "@/components/os/window-frame";
import { renderApp } from "@/components/os/apps/registry";
import { Dust } from "@/components/gift/dust";
import type { AppId } from "@/lib/archive/types";

export function Desktop({ onBirthday }: { onBirthday: () => void }) {
  const config = useArchive((s) => s.config);
  const openApp = useArchive((s) => s.openApp);
  const setOpenApp = useArchive((s) => s.setOpenApp);
  const visits = useArchive((s) => s.visits);
  const streak = useArchive((s) => s.streak);
  const now = useNow(1000);
  const elapsed = elapsedSince(config.startISO, now);
  const birthday = isBirthdayToday(config.birthdayISO, new Date(now));
  const quote = SYSTEM_QUOTES[visits % SYSTEM_QUOTES.length] ?? SYSTEM_QUOTES[0]!;
  const current = APP_CATALOG.find((a) => a.id === openApp);
  const dock = useMemo(() => APP_CATALOG.filter((a) => a.dock), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenApp(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpenApp]);

  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      <img
        src="/images/dusk.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/78 to-bg" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 pb-28 pt-5 sm:px-6">
        <header className="flex items-center justify-between gap-3 text-xs text-muted">
          <p className="font-mono tracking-[0.22em]">LOVE OS</p>
          <p className="font-mono tabular-nums">
            {new Date(now).toLocaleTimeString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </header>

        <section className="mt-8">
          <p className="text-xs tracking-[0.28em] text-subtle">我们已经在一起</p>
          {elapsed ? (
            <p className="mt-3 font-display text-3xl font-medium tabular-nums sm:text-4xl">
              {elapsed.days}
              <span className="text-xl text-muted"> 天 </span>
              {elapsed.hours}
              <span className="text-xl text-muted"> 时 </span>
              {elapsed.minutes}
              <span className="text-xl text-muted"> 分 </span>
              {elapsed.seconds}
              <span className="text-xl text-muted"> 秒</span>
            </p>
          ) : (
            <p className="mt-3 font-display text-2xl">从某一天开始</p>
          )}
          <p className="mt-4 font-mono text-xs text-subtle">
            Relationship: ONLINE · Happiness: 99% · Lifetime: 持续更新中
          </p>
          <p className="mt-3 max-w-md text-sm text-muted">{quote}</p>
          <p className="mt-2 text-xs text-subtle">
            这是你第 {Math.max(visits, 1)} 次打开这里。
            {streak > 1 ? ` 已连续 ${streak} 天。` : " 我一直记得你每一次来。"}
            {birthday ? " 今天，档案在过生日。" : ""}
          </p>
        </section>

        <ul className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {APP_CATALOG.map((app) => (
            <li key={app.id}>
              <button
                type="button"
                onClick={() => setOpenApp(app.id)}
                className="flex min-h-20 w-full flex-col items-start justify-between rounded-xl border border-border bg-bg-elevated/80 px-3 py-3 text-left hover:bg-surface"
              >
                <span className="font-mono text-[10px] tracking-[0.16em] text-subtle">
                  {app.kicker}
                </span>
                <span className="font-display text-base text-fg">{app.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav
        className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center px-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        aria-label="程序坞"
      >
        <ul className="pointer-events-auto flex max-w-full gap-1 overflow-x-auto rounded-xl border border-border bg-bg-elevated/90 p-1">
          {dock.map((app) => (
            <li key={app.id}>
              <button
                type="button"
                onClick={() => setOpenApp(app.id)}
                className="min-h-11 min-w-16 rounded-lg px-3 text-sm text-muted hover:bg-surface hover:text-fg"
              >
                {app.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {current && openApp ? (
        <WindowFrame
          title={current.label}
          kicker={current.kicker}
          onClose={() => setOpenApp(null)}
        >
          {renderApp(openApp as AppId, { playBirthday: onBirthday })}
        </WindowFrame>
      ) : null}
    </div>
  );
}
