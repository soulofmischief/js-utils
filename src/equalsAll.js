// @flow strict

export function equalsAll( ...args ) {
  const x = args[0]
  return args.every(( y ) => x === y )
}
