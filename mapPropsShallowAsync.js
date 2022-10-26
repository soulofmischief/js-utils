import { resolveProps } from '@soulofmischief/async.js'
import { mapPropsShallow } from './mapPropsShallow.js'


export async function mapPropsShallowAsync( object, callback ) {
  return await resolveProps( mapPropsShallow( object, callback ))
}
