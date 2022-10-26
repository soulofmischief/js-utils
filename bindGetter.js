
/**
 * Bind a getter to an object.
 *
 * @param {Object} object The object to bind the getter to.
 * @param {*} descriptor The property to bind the getter to.
 */
export function bindGetter( object, descriptor ) {
  const d = Object.getOwnPropertyDescriptor( object, descriptor )

  // If the descriptor is configurable, we can bind the getter.
  if ( d.configurable )
    // Bind the getter to the object.
    Object.defineProperty( object, descriptor, {
      configurable: d.configurable,
      enumerable: d.enumerable,
      get: d.get.bind( this )
    })

  // Throw an error if the descriptor is not configurable.
  else throw new Error( `Cannot bind getter for ${ descriptor }` )
}
