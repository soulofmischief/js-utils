// @flow strict
import { toObject } from '@soulofmischief/array.js/reduce'


export function mapPropsShallow( o: Object, cb: () => * ) {
  return Object
    .entries( o )
    //.map(([ k, v ]) => ({[ k ]: cb( v )}))
    .map(([ k, v ]) => ([ k, cb( v )]))
    .reduce( ...toObject )
}
