import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fillTemplate } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import {
  isBirthdayToday,
  nextBirthday,
  remainingUntil,
} from "@/lib/archive/time";
import { useNow } from "@/lib/archive/use-now";

export function BirthdayApp({ onPlay }: { onPlay: () => void }) {
  const config = useArchive((s) => s.config);
  const now = useNow(1000);
  const today = isBirthdayToday(config.birthdayISO, new Date(now));
  const next = nextBirthday(config.birthdayISO, new Date(now));
  const remain = next ? remainingUntil(next, now) : null;

  if (!config.birthdayISO) {
    return (
      <p className="text-sm text-muted">
        先在设置里写下她的生日。到了那一天，档案会自己换一套衣服。
      </p>
    );
  }

  if (today) {
    return (
      <div>
        <p className="font-display text-3xl">今天是你的生日。</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          但对我来说，最幸运的一天是遇见你。希望你今天开心。也希望以后很多年的今天，我都在。
        </p>
        <Button type="button" variant="paper" className="mt-8" onClick={onPlay}>
          播放生日更新
        </Button>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs tracking-[0.22em] text-subtle">距离你的生日还有</p>
      {remain ? (
        <div className="mt-6 grid grid-cols-4 gap-2">
          <Cell label="天" value={remain.days} />
          <Cell label="时" value={remain.hours} />
          <Cell label="分" value={remain.minutes} />
          <Cell label="秒" value={remain.seconds} />
        </div>
      ) : null}
      <p className="mt-6 text-sm text-muted">信封可以先不拆。等到那天。</p>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-2 py-4 text-center">
      <div className="font-display text-2xl tabular-nums">{value}</div>
      <div className="mt-1 text-xs text-subtle">{label}</div>
    </div>
  );
}

const BOOT_LINES = [
  "A new version is available.",
  "Updating...",
  "Loading memories... 100%",
  "Loading photographs... 100%",
  "Loading her... 100%",
  "System ready.",
];

export function BirthdayDrama({ onDone }: { onDone: () => void }) {
  const config = useArchive((s) => s.config);
  const [step, setStep] = useState(0);
  const letter = fillTemplate(config.letter, config);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(BOOT_LINES.length);
      return;
    }
    const id = window.setInterval(() => {
      setStep((n) => {
        if (n >= BOOT_LINES.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 800);
    return () => window.clearInterval(id);
  }, []);

  const showParty = step >= BOOT_LINES.length;

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      {!showParty ? (
        <div className="flex min-h-dvh flex-col justify-center px-8">
          <ul className="font-mono text-sm text-muted">
            {BOOT_LINES.slice(0, step + 1).map((line) => (
              <li key={line} className="mt-2">
                {line}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <img
            src="/images/stars.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-bg/55" />
          <Fireworks />
          <div className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6 py-16">
            <p className="text-xs tracking-[0.3em] text-muted">
              {config.birthdayLabel}
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium">
              生日快乐，{config.herName}
            </h1>
            <p className="mt-6 font-display text-lg leading-8 whitespace-pre-line text-fg">
              {letter.split("\n").slice(0, 8).join("\n")}
            </p>
            <WishCandle />
            <Button type="button" variant="paper" className="mt-8 w-fit" onClick={onDone}>
              回到系统
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

function WishCandle() {
  const [out, setOut] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOut(true)}
      className="mt-8 max-w-sm rounded-xl border border-border bg-bg-elevated/80 px-5 py-4 text-left"
    >
      <p className="font-display text-lg">{out ? "蜡烛灭了。" : "点这里，吹灭蜡烛。"}</p>
      <p className="mt-2 text-sm text-muted">
        {out
          ? "愿望我听到了。藏起来的那句是：希望以后很多年的今天，我都在。"
          : "许一个愿。不用说出来。"}
      </p>
    </button>
  );
}

function Fireworks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 18 }, (_, i) => (
        <span key={i} className="firework" style={{ left: `${8 + (i * 5) % 84}%`, animationDelay: `${(i % 7) * 0.35}s` }} />
      ))}
    </div>
  );
}
