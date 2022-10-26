
/**
 * @callback {import('./_jsdoc.js').changeCallback} changeCallback
 */

/**
 * Perform an operation on the keys of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} object Object to operate on.
 * @param {changeCallback} callback Callback to run on each key.
 * @returns {Object} New object with the keys changed.
 */
export function changeKeys ( object, callback ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map(( e, i ) =>
        [ callback( e[0], i ), e[1]]
      )
  )
}
