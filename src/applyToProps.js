// @flow strict
import { isObject } from './isObject'
import { toObject } from '@soulofmischief/array.js/reduce'


/**
 * Recursively apply a callback to each property of an object.
 */
export function applyToProps(
  o: Object,
  cb: () => *,
  context?: Object
) {
  return Object.entries( o )
    .map( entry => {
      return isObject( entry[1])
        ? [ entry[0], applyToProps( entry[1], cb, context )]
        : [ entry[0], context ? cb.call( context, entry[1]) : cb( entry[1])]
    })
    .reduce( ...toObject())
}
