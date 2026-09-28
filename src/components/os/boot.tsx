import { useEffect, useState } from "react";
import { useArchive } from "@/lib/archive/store";

const LINES = [
  "Loading memories...",
  "Loading photographs...",
  "Loading us...",
  "System ready.",
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const herName = useArchive((s) => s.config.herName);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onDone();
      return;
    }
    const id = window.setInterval(() => {
      setStep((n) => {
        if (n >= LINES.length - 1) {
          window.setTimeout(onDone, 700);
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 720);
    return () => window.clearInterval(id);
  }, [onDone]);

  return (
    <section className="flex min-h-dvh flex-col justify-center bg-bg px-8 text-fg">
      <p className="font-mono text-xs tracking-[0.28em] text-subtle">
        LOVE OS / ARCHIVE
      </p>
      <h1 className="mt-6 font-display text-3xl font-medium">{herName} 的档案</h1>
      <ul className="mt-10 flex max-w-md flex-col gap-3 font-mono text-sm text-muted">
        {LINES.map((line, i) => (
          <li
            key={line}
            className={i <= step ? "text-fg" : "text-subtle/40"}
          >
            <span className="text-primary">{i <= step ? ">" : " "}</span> {line}
            {i === step && i < LINES.length - 1 ? (
              <span className="boot-cursor">_</span>
            ) : null}
            {i < step || (i === step && i === LINES.length - 1) ? (
              <span className="ml-3 text-subtle">100%</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
