import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PHOTOS, SECRETS, TIMELINE } from "@/lib/archive/content";

type Draw =
  | { kind: "photo"; title: string; date: string; body: string; image: string }
  | { kind: "secret"; title: string; date: string; body: string }
  | { kind: "event"; title: string; date: string; body: string };

function deck(): Draw[] {
  return [
    ...PHOTOS.map((p) => ({
      kind: "photo" as const,
      title: p.title,
      date: p.date,
      body: p.unsaid,
      image: p.image,
    })),
    ...SECRETS.map((s) => ({
      kind: "secret" as const,
      title: s.title,
      date: "未说出口",
      body: s.body,
    })),
    ...TIMELINE.map((t) => ({
      kind: "event" as const,
      title: t.commit,
      date: t.date,
      body: t.body,
    })),
  ];
}

export function RandomApp() {
  const items = useMemo(deck, []);
  const [current, setCurrent] = useState<Draw | null>(null);

  function draw() {
    const next = items[Math.floor(Math.random() * items.length)];
    if (next) setCurrent(next);
  }

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">
        从档案里抽出一张。每次来，都可以不一样。
      </p>
      <Button type="button" variant="paper" className="mt-6" onClick={draw}>
        随机回忆
      </Button>
      {current ? (
        <article className="mt-8 overflow-hidden rounded-xl border border-border bg-surface">
          {"image" in current ? (
            <img
              src={current.image}
              alt=""
              className="aspect-photo w-full object-cover"
            />
          ) : null}
          <div className="p-5">
            <p className="font-mono text-xs text-subtle">
              你抽到了 · {current.date}
            </p>
            <h3 className="mt-2 font-display text-2xl">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {current.body}
            </p>
          </div>
        </article>
      ) : (
        <p className="mt-8 text-sm text-subtle">还没有抽。轻轻点一下就好。</p>
      )}
    </div>
  );
}
