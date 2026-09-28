export function parseISODate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

export function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDays(iso: string, days: number) {
  const date = parseISODate(iso);
  if (!date) return null;
  date.setDate(date.getDate() + days);
  return date;
}

export type Elapsed = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

export function elapsedSince(iso: string, now = Date.now()): Elapsed | null {
  const start = parseISODate(iso);
  if (!start) return null;
  const totalMs = Math.max(0, now - start.getTime());
  const days = Math.floor(totalMs / 86400000);
  const hours = Math.floor((totalMs % 86400000) / 3600000);
  const minutes = Math.floor((totalMs % 3600000) / 60000);
  const seconds = Math.floor((totalMs % 60000) / 1000);
  return { days, hours, minutes, seconds, totalMs };
}

export function remainingUntil(date: Date, now = Date.now()) {
  const ms = Math.max(0, date.getTime() - now);
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
    ms,
    reached: ms <= 0,
  };
}

export function nextBirthday(iso: string, now = new Date()) {
  const birth = parseISODate(iso);
  if (!birth) return null;
  const next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (next.getTime() < today.getTime()) {
    next.setFullYear(next.getFullYear() + 1);
  }
  return next;
}

export function isBirthdayToday(iso: string, now = new Date()) {
  const birth = parseISODate(iso);
  if (!birth) return false;
  return now.getMonth() === birth.getMonth() && now.getDate() === birth.getDate();
}

export function yesterdayISO(fromISO: string) {
  const date = parseISODate(fromISO);
  if (!date) return "";
  date.setDate(date.getDate() - 1);
  return toISODate(date);
}
