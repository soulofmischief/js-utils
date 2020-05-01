// @flow strict


/**
 * Determine if an object bound to `this` contains a particular key.
 * @param {*} key Property to search for.
 */

export function has ( key: * ) {
  return Object.prototype.hasOwnProperty.call( this, key )
}
