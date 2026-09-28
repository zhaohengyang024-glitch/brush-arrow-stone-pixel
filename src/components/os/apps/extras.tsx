import { ACHIEVEMENTS, AUDIO, DICTIONARY, TIMELINE } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { elapsedSince } from "@/lib/archive/time";
import { useNow } from "@/lib/archive/use-now";

export function DictionaryApp() {
  return (
    <div className="pb-6">
      <p className="text-sm text-muted">只有你们懂的词。别人查不到。</p>
      <ul className="mt-6 flex flex-col gap-4">
        {DICTIONARY.map((entry) => (
          <li key={entry.id} className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display text-2xl">{entry.word}</p>
            <p className="mt-1 text-xs tracking-[0.16em] text-subtle">{entry.pos}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.def}</p>
            <p className="mt-3 font-display text-sm text-fg">典型用法：{entry.usage}</p>
            <p className="mt-2 text-xs text-subtle">关联：{entry.related}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AchievementsApp() {
  const startISO = useArchive((s) => s.config.startISO);
  const hiddenUnlocked = useArchive((s) => s.hiddenUnlocked);
  const now = useNow(5000);
  const days = elapsedSince(startISO, now)?.days ?? 0;
  const eventIds = new Set(TIMELINE.map((t) => t.id));

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">节点会自己亮。藏起来的，要自己找到。</p>
      <ul className="mt-6 flex flex-col gap-2">
        {ACHIEVEMENTS.map((a) => {
          const unlocked = a.hidden
            ? hiddenUnlocked
            : (a.requireDays ? days >= a.requireDays : true) &&
              (a.requireEvent ? eventIds.has(a.requireEvent) : true);
          return (
            <li
              key={a.id}
              className="rounded-lg border border-border bg-surface px-4 py-3"
            >
              <p className="font-display text-lg">
                {a.hidden && !unlocked ? "????" : a.title}
              </p>
              <p className="mt-1 text-sm text-muted">
                {unlocked ? a.body : a.hidden ? "尚未解锁" : "条件未满足"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function AudioApp() {
  return (
    <div className="pb-6">
      <p className="text-sm text-muted">
        声音要慢慢收集。现在先把位置留好。
      </p>
      <ol className="mt-6 flex flex-col gap-3">
        {AUDIO.map((clip, i) => (
          <li key={clip.id} className="rounded-xl border border-border bg-surface p-4">
            <p className="font-mono text-xs text-subtle">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 font-display text-lg">{clip.title}</p>
            <p className="mt-2 text-sm text-muted">{clip.note}</p>
            {clip.src ? (
              <audio className="mt-3 w-full" controls src={clip.src} />
            ) : (
              <p className="mt-3 font-mono text-xs text-subtle">未装载音频</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
