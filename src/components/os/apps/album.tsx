import { PHOTOS } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { cn } from "@/lib/utils";

export function AlbumApp() {
  const revealed = useArchive((s) => s.revealedPhotos);
  const reveal = useArchive((s) => s.revealPhoto);

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">
        表面只有日期。点开，才是当时没说的话。
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PHOTOS.map((photo) => {
          const open = Boolean(revealed[photo.id]);
          return (
            <li key={photo.id}>
              <button
                type="button"
                onClick={() => reveal(photo.id)}
                className="w-full overflow-hidden rounded-xl border border-border bg-surface text-left"
                aria-expanded={open}
              >
                <img
                  src={photo.image}
                  alt=""
                  className="aspect-photo w-full object-cover"
                />
                <span className="block p-4">
                  <span className="block font-mono text-[11px] tracking-[0.16em] text-subtle">
                    {photo.date}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block font-display text-lg text-fg transition-opacity duration-200",
                      open ? "opacity-100" : "opacity-70",
                    )}
                  >
                    {open ? photo.title : photo.date}
                  </span>
                  {open ? (
                    <span className="mt-3 block space-y-2 text-sm leading-relaxed text-muted">
                      <span className="block">{photo.caption}</span>
                      <span className="block text-primary">{photo.unsaid}</span>
                      <span className="block text-xs text-subtle">
                        {photo.place} · {photo.mood}
                      </span>
                    </span>
                  ) : (
                    <span className="mt-2 block text-xs text-subtle">点击展开</span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
