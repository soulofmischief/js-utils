
/**
 * Debounce a callback.
 *
 * @param {Function} callback The callback to debounce.
 * @param {number} buffer The debounce buffer in milliseconds.
 * @param {boolean} immediate Whether to execute the callback at the beginning
 * of the interval. If false, the callback will be executed at the end.
 *
 * @return {Function} The debounced callback.
 */
export function debounce ( callback, buffer, immediate ) {
  // Track the timeout ID to ensure only one callback can be queued.
  let timeoutID

  // Return a proxy function.
  return function() {
    // Create a delayed callback.
    const delayedCallback = () => {
      // Clear timeout ID for reuse.
      timeoutID = null

      // Call function if not already called via `immediate`.
      if ( !immediate )
        callback.apply( this, arguments )
    }

    // Reset the timeout with the new callback.
    clearTimeout( timeoutID )
    timeoutID = setTimeout( delayedCallback, buffer )

    // Call function immediately if there's no timeout.
    if ( immediate && !timeoutID )
      callback.apply( this, arguments )
  }
}
