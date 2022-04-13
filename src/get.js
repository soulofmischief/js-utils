
/**
 * Dynamically access a property with dot notation.
 */

export function get( obj, str ) {
  return str.split( '.' ).reduce(( a, c ) => a[c], obj )
}
