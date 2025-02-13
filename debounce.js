
/**
 * Debounce a callback.
 * @param callback The callback to debounce.
 * @param buffer The debounce buffer in milliseconds.
 * @param immediate Whether to execute the callback at the beginning
 * of the interval. If false, the callback will be executed at the end.
 * @returns The debounced callback.
 */
export function debounce( callback, buffer, immediate ) {
  // Track the timeout ID so that only one callback can be queued at a time.
  let timeoutID

  return function () {
    const shouldCallImmediately = immediate && !timeoutID

    // Create a delayed callback.
    const delayedCallback = () => {
      timeoutID = null
      if ( !immediate ) {
        callback.apply( this, arguments )
      }
    }

    clearTimeout( timeoutID )
    timeoutID = setTimeout( delayedCallback, buffer )

    // Call immediately if needed (moved after timeout setup)
    if ( shouldCallImmediately ) {
      callback.apply( this, arguments )
    }
  }
}
