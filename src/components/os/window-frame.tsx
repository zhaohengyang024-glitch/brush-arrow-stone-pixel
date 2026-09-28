import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WindowFrame({
  title,
  kicker,
  onClose,
  children,
}: {
  title: string;
  kicker?: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-bg/75"
        aria-label="关闭窗口"
        onClick={onClose}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 flex h-[min(92dvh,100%)] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-border bg-bg-elevated shadow-lift sm:h-[min(86dvh,840px)] sm:rounded-xl"
      >
        <header className="flex items-center gap-3 border-b border-hairline px-3 py-2 sm:px-4">
          <div className="min-w-0 flex-1">
            {kicker ? (
              <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
                {kicker}
              </p>
            ) : null}
            <h2 className="truncate font-display text-lg text-fg">{title}</h2>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="关闭"
          >
            <X className="size-4" />
          </Button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          {children}
        </div>
      </section>
    </div>
  );
}
