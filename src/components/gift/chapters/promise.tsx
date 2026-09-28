import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fillTemplate } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";

export function PromiseChapter() {
  const config = useGift((s) => s.config);
  const reply = useGift((s) => s.reply);
  const replySaved = useGift((s) => s.replySaved);
  const setReply = useGift((s) => s.setReply);
  const saveReply = useGift((s) => s.saveReply);
  const promise = fillTemplate(config.promise, config);

  return (
    <section className="relative isolate min-h-dvh">
      <img
        src="/images/window.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/70" />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 pb-28 pt-16 sm:px-8">
        <p className="text-xs tracking-[0.3em] text-subtle">VII · 约定</p>
        <h1
          className="mt-3 font-display text-3xl font-medium text-fg"
          tabIndex={-1}
        >
          剩下的路，慢慢走
        </h1>
        <article className="paper-sheet mt-8 rounded-xl px-6 py-8 sm:px-10">
          <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
            {promise}
          </p>
          <p className="mt-8 font-display text-sm text-ink-muted">
            —— {config.hisName}
          </p>
        </article>
        <div className="mt-8 rounded-xl border border-border bg-bg-elevated/80 p-5">
          <p className="text-sm text-muted">
            如果你愿意，可以把想说的话留在这里。只有这台设备看得到。
          </p>
          <Textarea
            className="mt-3 border-transparent bg-paper font-display text-ink placeholder:text-ink-muted"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="写给未来的我们。"
          />
          <div className="mt-3 flex items-center gap-3">
            <Button
              type="button"
              variant="paper"
              onClick={saveReply}
              disabled={!reply.trim()}
            >
              留下
            </Button>
            {replySaved ? (
              <span className="text-sm text-primary">我收到了。</span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
