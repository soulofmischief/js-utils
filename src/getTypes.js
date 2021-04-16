import { toObject } from '@soulofmischief/array.js/reduce'

export function getTypes( object ) {
  return Object
    .entries( object )
    .map( e => [e[0], typeof e[1]])
    .reduce( ...toObject())
}
