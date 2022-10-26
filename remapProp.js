import { clone } from 'lodash-es'


/**
 * @callback {import('./_jsdoc.js').PropertyKey} PropertyKey
 */

/**
 * Remap an object's property.
 * @param {Object} object The object to remap.
 * @param {PropertyKey} from The property to remap.
 * @param {PropertyKey} to The new property name.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.deleteOriginal] Delete the original
 * property.
 */
export function remapProp( object, from, to, { deleteOriginal = true } = {}) {
  // Clone object.
  const c = clone( object )

  // Remap property.
  c[ to ] = c[ from ]

  // Optionally delete the original property.
  if ( deleteOriginal ) delete c[ from ]

  return c
}
