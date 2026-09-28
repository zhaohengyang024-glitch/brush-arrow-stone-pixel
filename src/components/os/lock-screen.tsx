import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dust } from "@/components/gift/dust";
import { normalizeKey } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";

export function LockScreen() {
  const config = useArchive((s) => s.config);
  const unlock = useArchive((s) => s.unlock);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const ok =
      normalizeKey(value).length > 0 &&
      normalizeKey(value) === normalizeKey(config.lockAnswer);
    if (!ok) {
      setError(true);
      return;
    }
    unlock();
  }

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      <img
        src="/images/envelope.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/35" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col justify-end px-6 pb-20 pt-16 sm:justify-center sm:pb-12">
        <p className="rise-in text-xs tracking-[0.35em] text-muted uppercase">
          LOVE OS
        </p>
        <h1 className="rise-in mt-5 font-display text-4xl font-medium tracking-wide">
          {config.herName}
        </h1>
        <p
          className="rise-in mt-6 text-sm leading-relaxed text-muted"
          style={{ animationDelay: "120ms" }}
        >
          {config.lockQuestion || "这是只写给你的档案。"}
        </p>
        <form
          onSubmit={submit}
          className="rise-in mt-8 flex flex-col gap-3"
          style={{ animationDelay: "200ms" }}
        >
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
            <p className="text-sm text-primary">再想想，这一天对我很重要。</p>
          ) : (
            <p className="text-xs text-subtle">
              示例答案是第一次见面的日期。可在设置里改成只属于你们的。
            </p>
          )}
          <Button type="submit" variant="paper" size="lg">
            进入
          </Button>
        </form>
        <button
          type="button"
          onClick={unlock}
          className="rise-in mt-6 self-start text-xs text-subtle underline-offset-4 hover:text-muted hover:underline"
          style={{ animationDelay: "280ms" }}
        >
          我是建档的人
        </button>
      </div>
    </section>
  );
}
