import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoverChapter } from "@/components/gift/chapters/cover";
import { LetterChapter } from "@/components/gift/chapters/letter";
import { MomentsChapter } from "@/components/gift/chapters/moments";
import { ReasonsChapter } from "@/components/gift/chapters/reasons";
import { WishesChapter } from "@/components/gift/chapters/wishes";
import { GiftsChapter } from "@/components/gift/chapters/gifts";
import { PromiseChapter } from "@/components/gift/chapters/promise";
import { CHAPTERS, nextChapterLabel } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { cn } from "@/lib/utils";

export function Book() {
  const chapter = useGift((s) => s.chapter);
  const setChapter = useGift((s) => s.setChapter);
  const regionRef = useRef<HTMLDivElement>(null);

  function go(next: number) {
    const clamped = Math.max(0, Math.min(CHAPTERS.length - 1, next));
    if (clamped === chapter) return;
    setChapter(clamped);
  }

  useEffect(() => {
    regionRef.current?.scrollTo({ top: 0 });
    const heading = regionRef.current?.querySelector("h1");
    heading?.focus({ preventScroll: true });
  }, [chapter]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") go(chapter + 1);
      if (e.key === "ArrowLeft") go(chapter - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chapter]);

  const nextLabel = nextChapterLabel(chapter);

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div
        ref={regionRef}
        className="min-h-dvh overflow-y-auto"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {chapter === 0 ? <CoverChapter onNext={() => go(1)} /> : null}
        {chapter === 1 ? <LetterChapter /> : null}
        {chapter === 2 ? <MomentsChapter /> : null}
        {chapter === 3 ? <ReasonsChapter /> : null}
        {chapter === 4 ? <WishesChapter /> : null}
        {chapter === 5 ? <GiftsChapter /> : null}
        {chapter === 6 ? <PromiseChapter /> : null}
      </div>

      <nav
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-1 px-2 pt-8 sm:px-4"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 0%, color-mix(in oklab, var(--color-bg) 70%, transparent) 55%, transparent 100%)",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
        aria-label="章节"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="pointer-events-auto shrink-0"
          onClick={() => go(chapter - 1)}
          disabled={chapter === 0}
          aria-label="上一章"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <ol className="pointer-events-auto flex items-center justify-center">
          {CHAPTERS.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => go(i)}
                className="flex size-8 items-center justify-center sm:size-11"
                aria-label={item.label}
                aria-current={i === chapter ? "page" : undefined}
              >
                <span
                  className={cn(
                    "h-2.5 rounded-full transition-[width,background-color] duration-200",
                    i === chapter
                      ? "w-5 bg-primary sm:w-6"
                      : "w-2.5 bg-subtle/50",
                  )}
                />
              </button>
            </li>
          ))}
        </ol>
        {nextLabel ? (
          <Button
            type="button"
            variant="ghost"
            className="pointer-events-auto h-11 shrink-0 px-2 sm:px-3"
            onClick={() => go(chapter + 1)}
            aria-label={nextLabel}
          >
            <span className="hidden text-sm sm:inline">{nextLabel}</span>
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <span className="inline-flex size-11 shrink-0" />
        )}
      </nav>
    </div>
  );
}
