// @flow strict


/**
 * Perform an operation on the entries of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} o Object to operate on.
 * @param {Function} cb Callback to run on each entry.
 */
export function changeEntries (
  o: {},
  cb: ( e: [ string | Symbol, * ], i: number ) => *,
) {
  return Object.fromEntries( Object.entries( o ).map( cb ))
}
