
/**
 * @callback {import('./_jsdoc.js').changeCallback} changeCallback
 */

/**
 * Perform an async operation on the keys of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} object Object to operate on.
 * @param {changeCallback} callback Callback to run on each key.
 * @returns {Object} New object with the keys changed.
 */
export async function changeKeysAsync( object, callback ) {
  // Await each entry and return a new object.
  return Object.fromEntries(
    await Promise.all(
      // Map each entry to a promise that resolves to the new entry.
      Object
        .entries( object )
        .map( async ( e, i ) =>
          // Await the callback and set the new key.
          [ await callback( e[0], i ), e[1]]
        )
    )
  )
}
