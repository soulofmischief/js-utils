
// Create a collator that compares strings in the current locale.
const collator = new Intl.Collator( 'en', { numeric: true })

/**
 * Immutably sort an object's keys.
 */
export function sortKeys( obj ) {
  return Object.fromEntries(
    Object.entries( obj ).sort(( a, b ) => collator.compare( a[0], b[0]))
  )
}
