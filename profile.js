
//eslint-disable-next-line no-console
export function profile( message, callback, logger = console.log ) {
  const
    time = performance.now(),
    result = callback()

  logger( message, performance.now() - time )

  return result
}
