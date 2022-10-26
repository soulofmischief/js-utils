
export function mapPropsShallow( object, callback ) {
  const result = {}
  for ( const key in object ) {
    result[ key ] = callback( object[ key ])
  }
  return result
}
