export function __30DaysAgoDate() {
  const now = Date.now()
  const __30DaysFromNow = now - 30 * 24 * 60 * 60 * 1000
  const date = new Date(__30DaysFromNow)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
