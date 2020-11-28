/* eslint-disable prettier/prettier */
export function __30DaysAgoDate()
{
    const now = Date.now();     
    const last30days = now - 30 * 24 * 60 * 60 * 1000
    const date = new Date(last30days)
    return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`
}