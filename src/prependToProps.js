// @flow strict
/**
 * Prepend a string to each value of an object.
 * @param object
 * @param string
 * @return {[string, string]|{}}
 */
export function prependToProps(
  object: {[string]: mixed },
  string: mixed
) {

  return Object.fromEntries( Object.entries( object ).map( p =>
    /* $FlowFixMe coerce */
    [ p[0], `${string}${p[1]}` ]
  ))
}
