// @flow strict


/**
 * Perform an operation on the values of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} o Object to operate on.
 * @param {Function} cb Callback to run on each value.
 */
export function changeValues (
  o: {},
  cb: ( key: string | Symbol, i: number ) => *,
) {
  return Object.fromEntries(
    Object
      .entries( o )
      .map(( e, i ) =>
        [ e[0], cb( e[1], i )]
      )
  )
}
