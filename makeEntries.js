
/**
 * Interleave two arrays.
 */
export function interleave( keys, values ) {
  return keys.map(( k, i ) => [ k, values[ i ]])
}
