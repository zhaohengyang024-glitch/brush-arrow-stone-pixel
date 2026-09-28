export function Dust() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className="dust-speck" />
      ))}
    </div>
  );
}
