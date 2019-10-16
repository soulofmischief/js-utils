// @flow strict
import { toObject } from '@soulofmischief/array.js'


/**
 * Prepend a string to each value of an object.
 * @param object
 * @param string
 * @return {[string, string]|{}}
 */
export function prependToProps(
  object: {[string]: mixed },
  string: mixed
) {
  return Object.entries( object ).map( p =>
    /* $FlowFixMe coerce */
    [ p[0], `${ string }${ p[1] }` ]
  ).reduce( toObject, {})
}
