import { PARCELS } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { cn } from "@/lib/utils";

export function GiftsChapter() {
  const unwrapped = useGift((s) => s.unwrapped);
  const unwrap = useGift((s) => s.unwrap);

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8">
      <p className="text-xs tracking-[0.3em] text-subtle">VI · 礼物</p>
      <h1
        className="mt-3 font-display text-3xl font-medium text-fg"
        tabIndex={-1}
      >
        三份不必拆包装纸的礼物
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">点一下，打开就好。</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {PARCELS.map((parcel) => {
          const open = Boolean(unwrapped[parcel.id]);
          return (
            <li key={parcel.id}>
              <button
                type="button"
                onClick={() => unwrap(parcel.id)}
                className={cn(
                  "flex min-h-72 w-full flex-col overflow-hidden rounded-xl border border-border text-left transition-[transform,opacity] duration-200",
                  open ? "bg-paper" : "bg-surface",
                )}
                aria-expanded={open}
              >
                {open ? (
                  <span className="flex h-full flex-col p-5">
                    <span className="text-xs tracking-[0.2em] text-ink-muted">
                      {parcel.kicker}
                    </span>
                    <span className="mt-3 font-display text-xl text-ink">
                      {parcel.title}
                    </span>
                    <span className="mt-4 flex-1 text-sm leading-relaxed whitespace-pre-line text-ink">
                      {parcel.body}
                    </span>
                  </span>
                ) : (
                  <span className="relative flex min-h-72 flex-1 flex-col justify-end">
                    <img
                      src="/images/gift.jpg"
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                    <span className="relative z-10 p-5">
                      <span className="text-xs tracking-[0.2em] text-muted">
                        {parcel.kicker}
                      </span>
                      <span className="mt-2 block font-display text-xl text-fg">
                        {parcel.title}
                      </span>
                    </span>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
