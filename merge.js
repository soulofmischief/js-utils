// @flow strict
import { merge as _merge } from 'lodash-es'


/**
 * Non-mutating wrapper for lodash's merge.
 */
export function merge( ...args ) {
  return _merge({}, ...args )
}
