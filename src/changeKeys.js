// @flow strict


/**
 * Perform an operation on the keys of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} o Object to operate on.
 * @param {Function} cb Callback to run on each key.
 */
export function changeKeys (
  o: {},
  cb: ( key: string | Symbol, i: number ) => *,
) {
  return Object.fromEntries(
    Object
      .entries( o )
      .map(( e, i ) =>
        [ cb( e[0], i ), e[1]]
      )
  )
}
