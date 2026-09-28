import { useEffect, useState } from "react";
import { fillTemplate } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";

export function LetterApp() {
  const config = useArchive((s) => s.config);
  const letter = fillTemplate(config.letter, config);
  const promise = fillTemplate(config.promise, config);
  const [shown, setShown] = useState(letter.length);
  const [full, setFull] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(letter.length);
      setFull(true);
      return;
    }
    setShown(0);
    setFull(false);
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      if (i >= letter.length) {
        setShown(letter.length);
        setFull(true);
        window.clearInterval(id);
        return;
      }
      setShown(i);
    }, 18);
    return () => window.clearInterval(id);
  }, [letter]);

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">写给你。慢慢看就好。</p>
      <article className="paper-sheet mt-5 rounded-xl px-5 py-7 sm:px-8 sm:py-9">
        <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
          {letter.slice(0, shown)}
          {!full ? <span className="boot-cursor text-ink-muted">|</span> : null}
        </p>
        {full ? (
          <p className="mt-8 font-display text-sm text-ink-muted">
            —— {config.hisName}
          </p>
        ) : (
          <button
            type="button"
            className="mt-6 text-sm text-ink-muted underline-offset-4 hover:underline"
            onClick={() => {
              setShown(letter.length);
              setFull(true);
            }}
          >
            展开完整信件
          </button>
        )}
      </article>
      {full ? (
        <article className="mt-5 rounded-xl border border-border bg-surface px-5 py-6">
          <p className="text-xs tracking-[0.22em] text-subtle">约定</p>
          <p className="mt-3 font-display text-base leading-8 whitespace-pre-line text-fg">
            {promise}
          </p>
        </article>
      ) : null}
    </div>
  );
}
