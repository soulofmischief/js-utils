
/**
 * Get the time elapsed between a given time anw now or another given time.
 * @param {DOMHighResTimeStamp} from The start of the time range.
 * @param {DOMHighResTimeStamp} [to] The end of the time range.
 */
export function getElapsedTime( from, to = performance.now()) {
  return to - from
}
