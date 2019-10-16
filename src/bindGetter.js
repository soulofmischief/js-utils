// @flow strict


export function bindGetter( obj: Object, prop: * ) {
  const d = Object.getOwnPropertyDescriptor( obj, prop )

  if ( d.configurable ) {
    Object.defineProperty( obj, prop, {
      configurable: d.configurable,
      enumerable: d.enumerable,
      get: d.get.bind( this )
    })
  }
}
