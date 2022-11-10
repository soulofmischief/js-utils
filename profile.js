
export function profile( message, callback ) {
  const
    time = performance.now(),
    result = callback()

  console.log( message, performance.now() - time )

  return result
}
