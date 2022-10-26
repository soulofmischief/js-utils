import { isObject } from './isObject.js'


/**
 * Recursively apply a callback to each property of an object.
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} callback The callback to apply to each property.
 * @param {Object} [context] The context to call the callback with.
 */
export function applyToProps( object, callback, context ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map( entry => {
        return isObject( entry[1])
          ? [
            entry[0],
            applyToProps( entry[1], callback, context ),
          ]
          : [
            entry[0],
            context
              ? callback.call( context, entry[1])
              : callback( entry[1]),
          ]
      })
  )
}
