import { useState } from "react";
import { MOMENTS } from "@/lib/gift-content";
import { cn } from "@/lib/utils";

export function MomentsChapter() {
  const [active, setActive] = useState(MOMENTS[0]!.id);
  const moment = MOMENTS.find((m) => m.id === active) ?? MOMENTS[0]!;

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8">
      <p className="text-xs tracking-[0.3em] text-subtle">III · 我们</p>
      <h1
        className="mt-3 font-display text-3xl font-medium text-fg"
        tabIndex={-1}
      >
        一些不必盛大的日子
      </h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <figure className="overflow-hidden rounded-xl bg-surface">
          <img
            src={moment.image}
            alt=""
            className="aspect-photo w-full object-cover"
          />
          <figcaption className="px-5 py-4">
            <p className="text-xs tracking-[0.2em] text-subtle">{moment.when}</p>
            <p className="mt-2 font-display text-xl text-fg">{moment.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {moment.body}
            </p>
          </figcaption>
        </figure>
        <ol className="flex flex-col gap-1">
          {MOMENTS.map((item) => {
            const selected = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "flex min-h-14 w-full items-center gap-4 rounded-lg px-4 py-3 text-left transition-colors duration-150",
                    selected
                      ? "bg-surface text-fg"
                      : "text-muted hover:bg-bg-elevated hover:text-fg",
                  )}
                >
                  <span className="font-display text-sm tabular-nums text-primary">
                    {item.kicker}
                  </span>
                  <span className="flex-1 text-sm">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
