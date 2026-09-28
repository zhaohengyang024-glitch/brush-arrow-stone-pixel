import { FORTUNES, WEATHER_LINES } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { elapsedSince, isBirthdayToday, toISODate } from "@/lib/archive/time";
import { useNow } from "@/lib/archive/use-now";

export function StatsApp() {
  const config = useArchive((s) => s.config);
  const visits = useArchive((s) => s.visits);
  const streak = useArchive((s) => s.streak);
  const secrets = useArchive((s) => s.unlockedSecrets);
  const plans = useArchive((s) => s.completedPlans);
  const now = useNow(1000);
  const elapsed = elapsedSince(config.startISO, now);
  const days = elapsed?.days ?? 0;

  const rows = [
    ["相爱时间", elapsed ? `${elapsed.days} 天` : "未写下开始的日子"],
    ["访问这里", `${visits} 次`],
    ["连续到来", `${streak} 天`],
    ["已翻开的秘密", `${Object.keys(secrets).filter((k) => secrets[k]).length}`],
    ["已勾选的未来", `${Object.keys(plans).length}`],
    ["她说“随便”后的真实决策概率", "3.7%"],
    ["“没生气”的可信度", "12%"],
    ["“我不饿”之后偷吃你的概率", "94.2%"],
    ["你主动认错次数", "237"],
    ["她实际上永远没错的次数", "无穷大"],
  ];

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">用数据说话。有些认真，有些不肯认真。</p>
      <dl className="mt-6 divide-y divide-hairline rounded-xl border border-border">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 px-4 py-3">
            <dt className="text-sm text-muted">{k}</dt>
            <dd className="font-mono text-sm tabular-nums text-fg">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 font-display text-lg text-primary">
        系统结论：她仍然是这个项目唯一的管理员。权限 100%。
      </p>
      {isBirthdayToday(config.birthdayISO) ? (
        <p className="mt-3 text-sm text-muted">今天还是她的生日。档案已切换。</p>
      ) : days > 0 ? (
        <p className="mt-3 text-sm text-subtle">第 {days} 天。仍在更新。</p>
      ) : null}
    </div>
  );
}

export function WeatherApp() {
  const now = useNow(30000);
  const hour = new Date(now).getHours();
  const idx = hour < 6 ? 3 : hour < 11 ? 0 : hour < 18 ? 1 : 2;
  const w = WEATHER_LINES[idx] ?? WEATHER_LINES[0]!;

  return (
    <div className="pb-6">
      <p className="text-xs tracking-[0.22em] text-subtle">今天的恋爱天气</p>
      <h3 className="mt-3 font-display text-4xl">{w.sky}</h3>
      <p className="mt-3 text-sm text-muted">{w.line}</p>
      <dl className="mt-8 grid grid-cols-3 gap-3">
        <Meter label="幸福" value={98} />
        <Meter label="想念" value={w.miss} />
        <Meter label="拥抱需求" value={w.hug} />
      </dl>
      <p className="mt-6 font-mono text-xs text-subtle">
        闹脾气概率 {w.sulk}% · 可忽略
      </p>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-4">
      <p className="text-xs text-subtle">{label}</p>
      <p className="mt-2 font-display text-2xl tabular-nums">{value}%</p>
    </div>
  );
}

export function FortuneApp() {
  const fortuneDate = useArchive((s) => s.fortuneDate);
  const fortuneIndex = useArchive((s) => s.fortuneIndex);
  const setFortune = useArchive((s) => s.setFortune);
  const streak = useArchive((s) => s.streak);
  const today = toISODate(new Date());
  const text =
    fortuneDate === today
      ? FORTUNES[fortuneIndex % FORTUNES.length]
      : null;

  function draw() {
    if (fortuneDate === today && text) return;
    const index = Math.floor(Math.random() * FORTUNES.length);
    setFortune(index, today);
  }

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">每天一句。不是打卡，是刚好看到。</p>
      {text ? (
        <p className="mt-8 font-display text-2xl leading-relaxed">{text}</p>
      ) : (
        <button
          type="button"
          onClick={draw}
          className="mt-8 min-h-32 w-full rounded-xl border border-border bg-surface px-5 py-8 text-left font-display text-lg"
        >
          抽今天的一句
        </button>
      )}
      {streak >= 7 ? (
        <p className="mt-6 text-sm text-primary">已连续想你 {streak} 天。</p>
      ) : null}
    </div>
  );
}
