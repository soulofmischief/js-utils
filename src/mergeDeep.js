// @flow strict
import { clone } from './clone'
import { isObject } from './isObject'
import { merge } from './merge'


export function mergeDeep( orig: {}) {
  // If orig isn't an object or an array, make it an empty object
  const obj = ( isObject( orig ) || Array.isArray( orig )) ? orig: {}

  const target = clone( obj )
  // We will loop through the arguments
  const len = arguments.length

  // Keep track of the index
  let i = 0

  // Increment index to offset first argument
  while ( ++i < len ) {
    const value = arguments[ i ]

    if ( isObject( value ) || Array.isArray( value )) {
      merge( target, value )
    }
  }
  
  return target
}
