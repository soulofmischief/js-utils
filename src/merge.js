// @flow strict
import { merge as _merge } from 'lodash'


/**
 * Non-mutating wrapper for lodash's merge.
 */
export function merge( ...args ) {
  return _merge({}, ...args )
}
