
/**
 * Create a frozen object with a set of unique keyed symbols.
 */
export function createEnum( ...values ) {
  const obj = {};

  for ( let index = 0; index < values.length; index++ ) {
    const value  = values[index]
    obj[ value ] = Symbol( value );
  }

  return Object.freeze( obj );
}
