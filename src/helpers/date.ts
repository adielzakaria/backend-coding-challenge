export function _30DaysAgoDate() {
  const now = Date.now();
  const _30DaysFromNow = now - 30 * 24 * 60 * 60 * 1000;
  const date = new Date(_30DaysFromNow);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
