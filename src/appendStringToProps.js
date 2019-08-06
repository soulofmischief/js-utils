// @flow strict


export function appendStringToProps(
  object: {[ string ]: mixed },
  string: string
) {
  return Object.entries( object ).map( p =>
    // Append string to entry value
    [ p[0], `${ string }${ p[1] }` ]
  ).reduce(( acc, entry ) => {
    acc[ entry[ 0 ]] = entry[ 1 ]
    return acc
  }, {})
}
