/**
 * Prepend a string to each value of an object.
 * @param object
 * @param string
 * @return {[string, string]|{}}
 */
export function prependToProps( object, string ) {
  return Object.fromEntries(
    Object
      .entries( object )
      .map( p => [ p[0], string + p[1]])
  )
}
