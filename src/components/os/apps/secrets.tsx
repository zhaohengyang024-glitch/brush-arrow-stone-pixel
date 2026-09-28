import { SECRETS } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { cn } from "@/lib/utils";

export function SecretsApp() {
  const unlocked = useArchive((s) => s.unlockedSecrets);
  const reveal = useArchive((s) => s.revealSecret);
  const count = SECRETS.filter((s) => unlocked[s.id]).length;

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">
        已解锁 {count} / {SECRETS.length} 个秘密
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SECRETS.map((secret, i) => {
          const open = Boolean(unlocked[secret.id]);
          return (
            <li key={secret.id} className="h-44">
              <button
                type="button"
                onClick={() => reveal(secret.id)}
                className={cn("flip-card h-full w-full", open && "is-flipped")}
                aria-pressed={open}
              >
                <span className="flip-inner block h-full">
                  <span className="flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-fg">
                      {secret.title}
                    </span>
                  </span>
                  <span className="flip-back flip-face flex h-full flex-col justify-center rounded-lg bg-paper p-4 text-left">
                    <span className="text-sm leading-relaxed text-ink">
                      {secret.body}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
