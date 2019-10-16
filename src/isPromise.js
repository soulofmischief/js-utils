// @flow strict

export function isPromise( obj ) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}
