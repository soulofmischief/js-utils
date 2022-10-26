
/**
 * @callback {import('./_jsdoc.js').changeCallback} changeCallback
 */

/**
 * Perform an operation on the values of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} object Object to operate on.
 * @param {changeCallback} callback Callback to run on each value.
 * @returns {Object} New object with the same keys as the original.
 */
export function changeValues ( object, callback ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map(( e, i ) =>
        // Set the new value with the callback.
        [ e[0], callback( e[1], i )]
      )
  )
}
