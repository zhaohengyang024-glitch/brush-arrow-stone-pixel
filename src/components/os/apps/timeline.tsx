import { TIMELINE } from "@/lib/archive/content";

export function TimelineApp() {
  return (
    <div className="pb-8">
      <p className="font-mono text-xs text-subtle">
        main branch is still under development.
      </p>
      <p className="mt-2 text-sm text-muted">
        Next release: 未来的我们
      </p>
      <ol className="mt-8 flex flex-col">
        {TIMELINE.map((event, i) => (
          <li key={event.id} className="relative grid grid-cols-[72px_1fr] gap-4 pb-10 sm:grid-cols-[96px_1fr]">
            <div className="text-right">
              <p className="font-mono text-[11px] tabular-nums text-subtle">
                {event.date.replaceAll("-", ".")}
              </p>
              <p className="mt-1 font-mono text-[10px] text-primary">{event.branch}</p>
            </div>
            <div className="relative border-l border-hairline pl-5 sm:pl-6">
              <span className="absolute top-1.5 -left-1 size-2 rounded-full bg-primary" />
              {event.image ? (
                <img
                  src={event.image}
                  alt=""
                  className="mb-3 aspect-photo w-full max-w-md rounded-lg object-cover"
                />
              ) : null}
              <p className="font-mono text-[11px] text-subtle">
                commit {event.hash}
              </p>
              <h3 className="mt-1 font-display text-xl text-fg">{event.commit}</h3>
              <ul className="mt-2 font-mono text-sm text-muted">
                {event.plus.map((line) => (
                  <li key={line}>+ {line}</li>
                ))}
              </ul>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
                {event.body}
              </p>
              {i === TIMELINE.length - 1 ? (
                <p className="mt-4 font-mono text-xs text-subtle">
                  {TIMELINE.length} commits · still unmerged into anyone else
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
