
/**
 * Get the shallow type of each value in an object.
 *
 * @param {Object} object The object to iterate over.
 *
 * @returns {Object} The new mapped object.
 */
export function getTypes( object ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map( e => [e[0], typeof e[1]])
  )
}
