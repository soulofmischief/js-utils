// @flow strict


const hasOwnProp = Object.prototype.hasOwnProperty
/**
 * Determine if an object contains a particular key.
 * @param {Object|*} obj Object to search.
 * @param {*} key Property to search for.
 */
export function has ( obj, key: * ) {
  return hasOwnProp.call( obj, key )
}
