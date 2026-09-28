import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGift } from "@/lib/gift-store";
import { Dust } from "@/components/gift/dust";

export function Envelope() {
  const herName = useGift((s) => s.config.herName);
  const open = useGift((s) => s.open);
  const [leaving, setLeaving] = useState(false);

  function handleOpen() {
    if (leaving) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      open();
      return;
    }
    setLeaving(true);
    window.setTimeout(() => open(), 520);
  }

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      <img
        src="/images/envelope.jpg"
        alt=""
        className={`absolute inset-0 size-full object-cover transition-[transform,filter,opacity] duration-500 ease-out ${
          leaving ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-100"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/30" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center justify-end px-6 pb-24 pt-20 text-center sm:justify-center sm:pb-16">
        <p
          className="rise-in text-xs tracking-[0.35em] text-muted uppercase"
          style={{ animationDelay: "80ms" }}
        >
          For you
        </p>
        <p
          className="rise-in mt-6 font-display text-sm text-muted"
          style={{ animationDelay: "160ms" }}
        >
          致
        </p>
        <h1
          className="rise-in mt-2 font-display text-4xl font-medium tracking-wide text-fg sm:text-5xl"
          style={{ animationDelay: "240ms" }}
        >
          {herName}
        </h1>
        <div
          className="rise-in mt-8 h-px w-16 bg-primary/70"
          style={{ animationDelay: "320ms" }}
        />
        <p
          className="rise-in mt-8 max-w-xs text-sm leading-relaxed text-muted"
          style={{ animationDelay: "400ms" }}
        >
          一份只写给你的生日礼物。轻轻打开就好。
        </p>
        <div className="rise-in mt-10" style={{ animationDelay: "520ms" }}>
          <Button
            type="button"
            variant="paper"
            size="lg"
            onClick={handleOpen}
            className="min-w-44"
          >
            打开信封
          </Button>
        </div>
      </div>
    </section>
  );
}
