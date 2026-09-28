import { fillTemplate } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";

export function LetterChapter() {
  const config = useGift((s) => s.config);
  const letter = fillTemplate(config.letter, config);

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 pb-28 pt-16 sm:px-8">
      <p className="text-xs tracking-[0.3em] text-subtle">II · 信</p>
      <h1
        className="mt-3 font-display text-3xl font-medium text-fg"
        tabIndex={-1}
      >
        写给你
      </h1>
      <article className="paper-sheet mt-8 flex-1 rounded-xl px-6 py-8 sm:px-10 sm:py-10">
        <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
          {letter}
        </p>
      </article>
    </section>
  );
}
