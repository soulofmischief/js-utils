// @flow strict


/**
 * Perform an async operation on the keys of an object and return a new object.
 * Use inside the class definition itself.
 * @param {Object} o Object to operate on.
 * @param {Function} cb Callback to run on each key.
 */
export async function changeKeysAsync(
  o: {},
  cb: ( key: string | Symbol, i: number ) => *,
) {
  return Object.fromEntries( await Promise.all( Object
    .entries( o )
    .map( async ( e, i ) =>
      [ await cb( e[0], i ), e[1]]
    )
  ))
}
