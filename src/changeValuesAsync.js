// @flow strict


/**
 * Perform an async operation on the values of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} o Object to operate on.
 * @param {Function} cb Callback to run on each value.
 */
export async function changeValuesAsync(
  o: {},
  cb: ( key: string | Symbol, i: number ) => *,
) {
  return Object.fromEntries( await Promise.all( Object
    .entries( o )
    .map( async ( e, i ) =>
      [ e[0], await cb( e[1], i )]
    )
  ))
}
