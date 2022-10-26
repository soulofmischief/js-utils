/**
 * Append a string to each value of an object.
 * @param {Object} object The object to iterate over.
 * @param string The string to append.
 * @return {[string, string]|{}} The new object.
 */
export function appendToProps( object, string ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map( p => [ p[0], p[1] + string ])
  )
}
