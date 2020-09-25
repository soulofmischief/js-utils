// @flow strict


/**
 * Determine if an object contains a particular key.
 * @param {Object|*} obj Object to search.
 * @param {*} key Property to search for.
 */
export function has ( obj, key: * ) {
  return Object.prototype.hasOwnProperty.call( obj, key )
}
