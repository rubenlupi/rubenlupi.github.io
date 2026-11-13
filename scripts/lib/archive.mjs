// Retrospective archive dating for Break & Change (docs/EDITORIAL_POLICY.md §6).
// Owner decision (2026-11-13): slots are assigned as articles are created, going BACKWARDS one week at a time
// from ANCHOR. The first article gets ANCHOR, the next ANCHOR - 7 days, and so on. Slots are Mondays.
export const ANCHOR = '2026-11-02';    // Monday of the week before the blog relaunch
export const EARLIEST = '2022-04-11';  // first Monday of the ~240-week horizon before November 2026
export const CATEGORIES = [
  'Systems, Execution & Organizational Design', 'Change & Transformation', 'Product & Customer Discovery',
  'Creativity & Innovation', 'Architecture & Engineering', 'AI & Technology', 'Communication',
];
const DAY = 86400000;
const iso = (d) => new Date(d).toISOString().slice(0, 10);
export const isMonday = (s) => new Date(`${s}T00:00:00Z`).getUTCDay() === 1;

/** Next free slot: one week before the earliest slot already taken, or ANCHOR if none. */
export function nextSlot(taken) {
  const dates = [...taken].map((s) => +new Date(`${s}T00:00:00Z`)).filter((n) => !Number.isNaN(n));
  const next = dates.length ? Math.min(...dates) - 7 * DAY : +new Date(`${ANCHOR}T00:00:00Z`);
  if (next < +new Date(`${EARLIEST}T00:00:00Z`)) return null; // horizon exhausted: owner decision needed
  return iso(next);
}
