
/**
 * Determine if a specified maximum time has transpired between now
 * and another time.
 * @param {number} timestamp The timestamp to compare against.
 * @param {number} maxTime The maximum time to allow.
 * @return {boolean} Whether the maximum time has passed.
 */
export function isStale( timestamp, maxTime ) {
  return performance.now() - timestamp >= maxTime
}
