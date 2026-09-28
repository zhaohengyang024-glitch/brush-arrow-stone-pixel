import { CAPSULES, PLANS } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { addDays, elapsedSince, parseISODate, remainingUntil } from "@/lib/archive/time";
import { useNow } from "@/lib/archive/use-now";
import { cn } from "@/lib/utils";

export function PlansApp() {
  const completed = useArchive((s) => s.completedPlans);
  const toggle = useArchive((s) => s.togglePlan);

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">还没做的，先写在这里。做完了，就变成回忆。</p>
      <ul className="mt-6 flex flex-col gap-2">
        {PLANS.map((plan) => {
          const done = Boolean(completed[plan.id]);
          return (
            <li key={plan.id}>
              <button
                type="button"
                onClick={() => toggle(plan.id)}
                className="flex min-h-16 w-full items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-left"
              >
                <span
                  className={cn(
                    "mt-1 size-4 shrink-0 rounded-xs border",
                    done ? "border-primary bg-primary" : "border-subtle",
                  )}
                />
                <span>
                  <span className={cn("block font-display text-lg", done && "text-muted line-through")}>
                    {plan.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{plan.body}</span>
                  {done ? (
                    <span className="mt-1 block font-mono text-xs text-subtle">
                      完成于 {completed[plan.id]}
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function CapsulesApp() {
  const config = useArchive((s) => s.config);
  const opened = useArchive((s) => s.openedCapsules);
  const open = useArchive((s) => s.openCapsule);
  const now = useNow(1000);
  const elapsed = elapsedSince(config.startISO, now);

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">写给以后的信。不到那天，先封着。</p>
      <ul className="mt-6 flex flex-col gap-3">
        {CAPSULES.map((cap) => {
          const unlockAt = cap.unlockISO
            ? parseISODate(cap.unlockISO)
            : cap.unlockAfterDays
              ? addDays(config.startISO, cap.unlockAfterDays)
              : null;
          const remain = unlockAt ? remainingUntil(unlockAt, now) : null;
          const ready = Boolean(remain?.reached) || (!unlockAt && (elapsed?.days ?? 0) >= 0);
          const isOpen = Boolean(opened[cap.id]);
          return (
            <li key={cap.id} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-display text-xl">{cap.title}</p>
              <p className="mt-2 text-sm text-muted">{cap.preview}</p>
              {ready ? (
                isOpen ? (
                  <p className="paper-sheet mt-4 rounded-lg px-4 py-5 font-display leading-8 text-ink">
                    {cap.body}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => open(cap.id)}
                    className="mt-4 text-sm text-primary underline-offset-4 hover:underline"
                  >
                    打开
                  </button>
                )
              ) : remain ? (
                <p className="mt-4 font-mono text-xs tabular-nums text-subtle">
                  还有 {remain.days} 天 {remain.hours} 时 {remain.minutes} 分
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
