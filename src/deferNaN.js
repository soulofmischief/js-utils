// @flow strict

export function deferNaN( a: *, b: * ) {
  if ( isNaN( a )) return b
  else return a
}
