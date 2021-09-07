// @flow strict

export function equalsAll( ...args ) {
  return args.every( y => y === args[0])
}
