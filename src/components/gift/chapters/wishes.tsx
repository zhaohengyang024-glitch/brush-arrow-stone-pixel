import { useState } from "react";
import { WISH_EDGES, WISHES } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { Dust } from "@/components/gift/dust";
import { cn } from "@/lib/utils";

export function WishesChapter() {
  const revealed = useGift((s) => s.revealed);
  const revealWish = useGift((s) => s.revealWish);
  const [active, setActive] = useState<string | null>(null);
  const current = WISHES.find((w) => w.id === active);
  const count = WISHES.filter((w) => revealed[w.id]).length;

  return (
    <section className="relative isolate min-h-dvh overflow-hidden">
      <img
        src="/images/stars.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/55" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-28 pt-16 sm:px-8">
        <p className="text-xs tracking-[0.3em] text-subtle">V · 愿望</p>
        <h1
          className="mt-3 font-display text-3xl font-medium text-fg"
          tabIndex={-1}
        >
          她的星图
        </h1>
        <p className="mt-3 text-sm text-muted">
          点亮一颗星。已点亮 {count} / {WISHES.length}
        </p>
        <div className="relative mt-6 aspect-constellation w-full sm:aspect-photo">
          <svg
            viewBox="0 0 100 80"
            className="absolute inset-0 size-full overflow-visible"
            aria-hidden="true"
          >
            {WISH_EDGES.map(([a, b]) => {
              const pa = WISHES.find((w) => w.id === a);
              const pb = WISHES.find((w) => w.id === b);
              if (!pa || !pb) return null;
              const lit = revealed[a] && revealed[b];
              return (
                <line
                  key={`${a}-${b}`}
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  stroke={lit ? "var(--color-primary)" : "var(--color-subtle)"}
                  strokeOpacity={lit ? 0.85 : 0.28}
                  strokeWidth="0.28"
                />
              );
            })}
          </svg>
          {WISHES.map((wish, i) => {
            const lit = Boolean(revealed[wish.id]);
            return (
              <button
                key={wish.id}
                type="button"
                onClick={() => {
                  revealWish(wish.id);
                  setActive(wish.id);
                }}
                className={cn(
                  "absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
                  !lit && "star-idle",
                )}
                style={{ left: `${wish.x}%`, top: `${wish.y}%` }}
                aria-label={wish.title}
              >
                <span
                  className={cn(
                    "block rounded-full",
                    lit ? "size-3 bg-primary" : "size-2 bg-fg/80",
                  )}
                />
                <span className="sr-only">{i + 1}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-2 min-h-24 rounded-lg border border-border bg-bg-elevated/80 px-5 py-4">
          {current ? (
            <>
              <p className="font-display text-lg text-fg">{current.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {current.body}
              </p>
            </>
          ) : (
            <p className="text-sm text-muted">从任意一颗星开始。</p>
          )}
          {count === WISHES.length ? (
            <p className="mt-3 text-sm text-primary">这一年，都给你。</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
