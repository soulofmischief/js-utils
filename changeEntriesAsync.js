/**
 * @callback {import('./_jsdoc.js').changeEntryCallback} changeEntryCallback
 */

/**
 * Perform an operation on the entries of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} object Object to operate on.
 * @param {changeEntryCallback} callback Callback to run on each entry.
 * @returns {Object} New object with the entries changed.
 */
export async function changeEntriesAsync ( object, callback ) {
  return Object.fromEntries(
    await Promise.all(
      Object
        .entries( object )
        .map( callback )
    )
  )
}
