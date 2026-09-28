import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGift } from "@/lib/gift-store";
import { Dust } from "@/components/gift/dust";

function startOfDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

export function useLockState() {
  const iso = useGift((s) => s.config.birthdayISO);
  const question = useGift((s) => s.config.secretQuestion);
  const passed = useGift((s) => s.secretPassed);

  const lockedUntil = useMemo(() => {
    if (!iso) return null;
    const date = startOfDay(iso);
    if (!date) return null;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date.getTime() > today.getTime() ? date : null;
  }, [iso]);

  return {
    lockedUntil,
    needsSecret: Boolean(question.trim()) && !passed,
    question: question.trim(),
  };
}

export function CountdownGate({ until }: { until: Date }) {
  const herName = useGift((s) => s.config.herName);
  const remaining = useRemaining(until);

  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-bg px-6 text-center text-fg">
      <img
        src="/images/stars.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-bg/70" />
      <Dust />
      <div className="relative z-10 max-w-md">
        <p className="rise-in text-xs tracking-[0.35em] text-muted">FOR YOU</p>
        <h1 className="rise-in mt-6 font-display text-3xl font-medium sm:text-4xl">
          {herName}，还没到那一天
        </h1>
        <p className="rise-in mt-4 text-sm leading-relaxed text-muted">
          信封还封着。等到生日当天，再轻轻打开。
        </p>
        <div className="rise-in mt-10 grid grid-cols-3 gap-3">
          <TimeCell label="天" value={remaining.days} />
          <TimeCell label="时" value={remaining.hours} />
          <TimeCell label="分" value={remaining.minutes} />
        </div>
      </div>
    </section>
  );
}

export function SecretGate() {
  const question = useGift((s) => s.config.secretQuestion);
  const answer = useGift((s) => s.config.secretAnswer);
  const pass = () => useGift.setState({ secretPassed: true });
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const ok =
      value.trim().toLowerCase() === answer.trim().toLowerCase() &&
      value.trim().length > 0;
    if (!ok) {
      setError(true);
      return;
    }
    pass();
  }

  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-fg">
      <div className="w-full max-w-sm">
        <p className="text-xs tracking-[0.3em] text-muted">一道小小的门</p>
        <h1 className="mt-4 font-display text-2xl font-medium">先回答一句</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{question}</p>
        <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="写在这里"
            autoComplete="off"
            aria-invalid={error}
          />
          {error ? (
            <p className="text-sm text-primary">再想一想。答案很轻的。</p>
          ) : null}
          <Button type="submit" variant="paper">
            进入
          </Button>
        </form>
      </div>
    </section>
  );
}

function TimeCell({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border bg-bg-elevated/80 px-2 py-4">
      <div className="font-display text-3xl tabular-nums text-fg">{value}</div>
      <div className="mt-1 text-xs text-subtle">{label}</div>
    </div>
  );
}

function useRemaining(until: Date) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30000);
    return () => window.clearInterval(id);
  }, []);

  const ms = Math.max(0, until.getTime() - now);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return { days, hours, minutes };
}
