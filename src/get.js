
/**
 * Access a property with dot syntax.
 */

export function get( obj, str ) {
  return str.split( '.' ).reduce(( a, c ) => a[c], obj )
}
