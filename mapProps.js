// @flow strict
import { isPlainObject } from 'lodash-es'


export function mapProps( o, cb, condition = isPlainObject ) {
  return { ...Object.keys( o ).map( k => ({
    [k]: condition( o[k])
      ? mapProps( o[k], cb )
      : cb( o[k])
  }))}
}
