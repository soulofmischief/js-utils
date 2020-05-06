// @flow strict
import { toObject } from '@soulofmischief/array.js/reduce'


/**
 * Append a string to each value of an object.
 * @param object
 * @param value
 * @return {[string, string]|{}}
 */
export function appendToProps(
  object: {[string]: mixed },
  value: mixed
) {
  return Object.entries( object ).map( p =>
    // Append string to entry value
    /* $FlowFixMe coerce */
    [ p[0], `${ p[1] }${ value }` ]
  ).reduce( ...toObject )
}
