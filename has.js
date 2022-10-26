
/**
 * Determine if an object contains a particular key.
 * @param {Object|*} object Object to search.
 * @param {*} key Property to search for.
 * @return {boolean} True if the object contains the key.
 */
export function has ( object, key ) {
  return Object.prototype.hasOwnProperty.call( object, key )
}
