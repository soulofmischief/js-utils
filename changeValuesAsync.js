
/**
 * @callback {import('./_jsdoc.js').changeCallback} changeCallback
 */

/**
 * Perform an async operation on the values of an object and return a new
 * object.
 * Use inside the class definition itself.
 * @param {Object} object Object to operate on.
 * @param {changeCallback} callback Callback to run on each value.
 * @returns {Object} New object with the values changed.
 */
export async function changeValuesAsync( object, callback ) {
  // Await each entry and return a new object.
  return Object.fromEntries(
    await Promise.all(
      // Map each entry to a promise that resolves to the new entry.
      Object
        .entries( object )
        .map( async ( e, i ) =>
          // Await the callback and set the new value.
          [ e[0], await callback( e[1], i )]
        )
    )
  )
}
