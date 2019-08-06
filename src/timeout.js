// @flow strict

/** Wait for the specified amount of time. */
export function timeout( ms: number ) {
  return new Promise( resolve => setTimeout( resolve, ms ))
}
