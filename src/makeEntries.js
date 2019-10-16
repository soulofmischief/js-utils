// @flow strict

export function makeEntries( keys, values ) {
  return keys.map(( k, i ) => [ k, values[ i ]])
}
