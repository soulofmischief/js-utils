
/**
 * Dynamically set a nested value with dot notation.
 */

export const set = ( obj, path, value ) => {
  if ( typeof path === 'string' ) {
    path = path.split( '.' )
  }

  if ( path.length === 1 ) {
    obj[ path ] = value
    return true
  }
  return set( obj[ path[0]], path.slice( 1 ), value )
}
