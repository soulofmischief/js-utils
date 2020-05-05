// @flow strict
import { resolveProps } from '@soulofmischief/async.js'
import { mapPropsShallow } from './mapPropsShallow'


export async function mapPropsShallowAsync( o: Object, cb: () => * ) {
  return await resolveProps( mapPropsShallow( o, cb ))
}
