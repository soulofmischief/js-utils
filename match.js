
/**
 * Match two objects based on equality between a shared field.
 *
 * @param {Object} objectA The first object to compare.
 * @param {Object} objectB The second object to compare.
 * @param {string} field The field to compare.
 * @return {boolean} Whether the two objects are equal.
 */
export function match( objectA, objectB, field = '_id' ) {
  if ( objectA[ field ] && objectB[ field ])
    return objectA[ field ] === objectB[ field ]

  else return false
}
