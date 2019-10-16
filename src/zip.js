// @flow strict
import { makeEntries } from './makeEntries'
import { toObject } from '@soulofmischief/array.js'

/** Reduce a pair of key and value lists into an object. */
export function zip( keys, values ) {
  return makeEntries( keys, values ).reduce( toObject, {})
}
