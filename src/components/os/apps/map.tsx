import { PLACES } from "@/lib/archive/content";

export function MapApp() {
  return (
    <div className="pb-6">
      <p className="text-sm text-muted">去过的地方会亮。还没去的，先空着。</p>
      <ul className="mt-6 grid gap-3">
        {PLACES.map((place) => (
          <li
            key={place.id}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            {place.lit && place.image ? (
              <img
                src={place.image}
                alt=""
                className="aspect-photo w-full object-cover"
              />
            ) : null}
            <div className="p-4">
              <p className="font-display text-xl">
                {place.lit ? place.city : "?????"}
              </p>
              {place.lit ? (
                <div className="mt-2 space-y-1 text-sm text-muted">
                  <p>{place.event}</p>
                  <p className="font-mono text-xs text-subtle">
                    {[place.date, place.weather, place.steps ? `${place.steps} 步` : ""]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {place.food ? <p>晚饭：{place.food}</p> : null}
                  {place.impression ? <p>{place.impression}</p> : null}
                </div>
              ) : (
                <p className="mt-2 text-sm text-subtle">
                  这里还没去。但迟早会一起去。
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
