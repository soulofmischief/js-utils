
/**
 * @typedef {(string|Symbol)} PropertyKey
 */

/**
 * Determine whether an object property is a getter.
 * @param {Object} object
 * @param {PropertyKey} property
 * @returns {boolean}
 */
export function isGetter ( object, property ) {
  return !!Object.getOwnPropertyDescriptor( object, property )['get']
}
