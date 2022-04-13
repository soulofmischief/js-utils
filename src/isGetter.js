// @flow strict

export function isGetter ( obj: Object, prop: * ) {
  return !!Object.getOwnPropertyDescriptor( obj, prop )['get']
}
