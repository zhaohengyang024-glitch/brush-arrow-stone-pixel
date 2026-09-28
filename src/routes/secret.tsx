import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fillTemplate, normalizeKey } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";

export const Route = createFileRoute("/secret")({ component: SecretPage });

function SecretPage() {
  const config = useArchive((s) => s.config);
  const hiddenUnlocked = useArchive((s) => s.hiddenUnlocked);
  const unlockHidden = useArchive((s) => s.unlockHidden);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const open = hiddenUnlocked;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (normalizeKey(value) === normalizeKey(config.keyword)) {
      unlockHidden();
      setError(false);
      return;
    }
    setError(true);
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6 py-16 text-fg">
      {open ? (
        <>
          <p className="text-xs tracking-[0.28em] text-subtle">HIDDEN FILE</p>
          <article className="paper-sheet mt-6 rounded-xl px-6 py-8">
            <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
              {fillTemplate(config.hiddenLetter, config)}
            </p>
          </article>
          <Link
            to="/"
            className="mt-8 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            返回系统
          </Link>
        </>
      ) : (
        <>
          <p className="text-xs tracking-[0.28em] text-subtle">RESTRICTED</p>
          <h1 className="mt-4 font-display text-3xl">这里没有目录</h1>
          <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
            <Input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="口令"
              autoComplete="off"
            />
            {error ? (
              <p className="text-sm text-primary">再想想。答案很轻的。</p>
            ) : null}
            <Button type="submit" variant="paper">
              打开
            </Button>
          </form>
        </>
      )}
    </main>
  );
}
