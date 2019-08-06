// @flow strict


/**
 * Match two objects based on equality between a shared field.
 */
export function match( objA: {}, objB: {}, field: string = '_id' ) {
  if ( objA[ field ] && objB[ field ])
    return objA[ field ] === objB[ field ]

  else return false
}
