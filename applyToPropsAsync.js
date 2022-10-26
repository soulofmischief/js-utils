// @flow strict
import { zip } from '@soulofmischief/array.js'
import { isPromise } from '@soulofmischief/async.js'
import { isObject } from './isObject.js'


/**
 * Recursively apply an asynchronous callback to each property of an object.
 *
 * @param {Object} object The object to map over.
 * @param {Function} callback The callback to apply to each property.
 * @param {Object} [context] The context to apply to the callback.
 */
export async function applyToPropsAsync( object, callback, context ) {
  const vals = Object.values( object )

  // We have to keep track of the index since we are using an async for loop.
  let i = 0

  for await( let v of vals ) {
    if ( isObject( v ) && !isPromise( v ))
      vals[i] = applyToPropsAsync( v, callback, context )
    else
      vals[i] = context
        ? await callback.call( context, v )
        : await callback( v )

    i++
  }

  return zip( Object.keys( object ), vals )
}
