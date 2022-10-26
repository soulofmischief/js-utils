import { capitalize } from '@soulofmischief/strings'
import { pull } from '@soulofmischief/array.js'
import { get } from './get.js'


/**
 * Create add, remove and update listeners which operate on a store.
 *
 * @param {Array|Map} store The store to operate on.
 * @param {target} target The target to add listeners to.
 * @param {string} [suffix] The name of the item in the store. Will be
 * capitalized and added to each listener name.
 * @param {String[]} [listeners] Array of listeners to create.
 */
export function configureStore(
  store = new Map(),
  target = new EventTarget(),
  suffix = '',
  listeners = [ 'add', 'remove', 'update' ]
) {
  const _suffix = capitalize( suffix )

  // Check if store is Map.
  if ( store instanceof Map ) {
    // Add Map listeners.
    if ( listeners.includes( 'add' )) target.addEventListener(
      `add${_suffix}`, async e => store.set( e.detail, e.detail ))

    if ( listeners.includes( 'remove' )) target.addEventListener(
      `remove${_suffix}`, async e => store.delete( e.detail ))

    if ( listeners.includes( 'update' )) target.addEventListener(
      `update${_suffix}`, async e => store.set( e.detail, e.detail ))
  }

  // Check if store is Array.
  else if ( Array.isArray( store )) {
    if ( listeners.includes( 'add' )) target.addEventListener(
      `add${_suffix}`, async e => store.push( e.detail ))

    if ( listeners.includes( 'remove' )) target.addEventListener(
      `remove${_suffix}`, async e => pull( store, e.detail ))

    if ( listeners.includes( 'update' )) target.addEventListener(
      `update${_suffix}`, async e => update( store, e.detail ))
  }

  else throw new Error( 'Store must be a Map or array.' )

  return { listeners, store, target }
}


function update( store, { data, item }) {
  Object.assign( get( store, item ), data )
}
