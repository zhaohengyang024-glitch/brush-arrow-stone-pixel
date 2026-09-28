import { REASONS } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { cn } from "@/lib/utils";

export function ReasonsChapter() {
  const flipped = useGift((s) => s.flipped);
  const toggleFlip = useGift((s) => s.toggleFlip);

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8">
      <p className="text-xs tracking-[0.3em] text-subtle">IV · 因为</p>
      <h1
        className="mt-3 font-display text-3xl font-medium text-fg"
        tabIndex={-1}
      >
        十二件很小的事
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">点开看看背面。</p>
      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {REASONS.map((reason, i) => {
          const isFlipped = Boolean(flipped[reason.id]);
          return (
            <li key={reason.id} className="h-40 sm:h-44">
              <button
                type="button"
                onClick={() => toggleFlip(reason.id)}
                className={cn("flip-card h-full w-full", isFlipped && "is-flipped")}
                aria-pressed={isFlipped}
              >
                <span className="flip-inner block h-full">
                  <span className="flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left">
                    <span className="font-display text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base leading-snug text-fg">
                      {reason.title}
                    </span>
                  </span>
                  <span className="flip-back flip-face flex h-full flex-col justify-center rounded-lg bg-paper p-4 text-left">
                    <span className="text-sm leading-relaxed text-ink">
                      {reason.body}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
