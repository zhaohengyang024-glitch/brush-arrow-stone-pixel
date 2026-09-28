import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TIMELINE } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";

export function ReplayApp() {
  const herName = useArchive((s) => s.config.herName);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!running) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(TIMELINE.length);
      return;
    }
    setStep(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      if (i > TIMELINE.length) {
        window.clearInterval(id);
        return;
      }
      setStep(i);
    }, 900);
    return () => window.clearInterval(id);
  }, [running]);

  const done = step >= TIMELINE.length;

  return (
    <div className="pb-6">
      <p className="font-display text-xl text-fg">
        如果人生可以重新运行一次程序……
      </p>
      <p className="mt-3 text-sm text-muted">
        {herName}，我试过在心里把这件事倒回去。结果都一样。
      </p>
      {!running ? (
        <Button
          type="button"
          variant="paper"
          className="mt-8"
          onClick={() => {
            setStep(-1);
            setRunning(true);
          }}
        >
          重新运行
        </Button>
      ) : (
        <ol className="mt-8 flex flex-col gap-4">
          {TIMELINE.map((event, i) => (
            <li
              key={event.id}
              className={i <= step ? "opacity-100" : "opacity-20"}
            >
              <p className="font-mono text-xs text-subtle">{event.date}</p>
              <p className="mt-1 font-display text-lg">{event.commit}</p>
              {i < TIMELINE.length - 1 && i <= step ? (
                <p className="mt-1 text-subtle">↓</p>
              ) : null}
            </li>
          ))}
          {done ? (
            <li className="mt-4">
              <p className="font-display text-2xl text-primary">
                我还是会走向你。
              </p>
              <Button
                type="button"
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setRunning(false);
                  setStep(-1);
                }}
              >
                再运行一次
              </Button>
            </li>
          ) : null}
        </ol>
      )}
    </div>
  );
}
