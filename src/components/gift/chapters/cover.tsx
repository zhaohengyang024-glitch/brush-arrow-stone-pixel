import { Button } from "@/components/ui/button";
import { Dust } from "@/components/gift/dust";
import { useGift } from "@/lib/gift-store";

export function CoverChapter({ onNext }: { onNext: () => void }) {
  const herName = useGift((s) => s.config.herName);
  const birthdayLabel = useGift((s) => s.config.birthdayLabel);

  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-28 text-center">
      <img
        src="/images/dusk.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
      <Dust />
      <div className="relative z-10 max-w-lg">
        <p className="rise-in text-xs tracking-[0.4em] text-muted">
          {birthdayLabel}
        </p>
        <h1
          className="rise-in mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl"
          tabIndex={-1}
        >
          {herName}，
          <br />
          生日快乐
        </h1>
        <p
          className="rise-in mt-6 font-latin text-xl italic text-primary"
          style={{ animationDelay: "120ms" }}
        >
          for you
        </p>
        <p
          className="rise-in mx-auto mt-8 max-w-sm text-sm leading-relaxed text-muted"
          style={{ animationDelay: "200ms" }}
        >
          七封短笺，一些旧日，和我对你接下来一年的盼望。慢慢看就好。
        </p>
        <div className="rise-in mt-10" style={{ animationDelay: "320ms" }}>
          <Button type="button" variant="paper" size="lg" onClick={onNext}>
            翻开
          </Button>
        </div>
      </div>
    </section>
  );
}
