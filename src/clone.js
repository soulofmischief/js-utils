// @flow strict


export function clone( literal ) {
  // Deep clones object literals but not prototypes
  return JSON.parse( JSON.stringify( literal ))
}
