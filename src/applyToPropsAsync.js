// @flow strict
import { isPromise } from '@soulofmischief/async.js/isPromise'
import { isObject } from './isObject'
import { zip } from './zip'


/**
 * Recursively apply an asynchronous callback to each property of an object.
 */
export async function applyToPropsAsync(
  o: Object,
  cb: () => *,
  context?: Object
) {
  const vals = Object.values( o )

  let i = 0

  for await( let v of vals ) {
    if ( isObject( v ) && !isPromise( v ))
      vals[i] = applyToPropsAsync( v, cb, context )
    else
      vals[i] = context ? await cb.call( context, v ) : await cb( v )

    i++
  }

  return zip( Object.keys( o ), vals )
}
