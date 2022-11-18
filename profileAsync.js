
//eslint-disable-next-line no-console
export async function profileAsync( message, callback, logger = console.log ) {
  const
    time = performance.now(),
    result = await callback()

  logger( message, performance.now() - time )

  return result
}
