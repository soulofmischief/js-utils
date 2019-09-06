// @flow strict
import { performance } from './_common'


/**
 * Determine if a specified maximum time has transpired between now
 * and another time.
 * @return {boolean} Whether the maximum time has passed.
 */
export function isStale( time: DOMHighResTimeStamp, maxTime: number ) {
  return performance.now() - time >= maxTime
}
