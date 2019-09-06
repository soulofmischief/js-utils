// @flow strict

/* Node.JS compatibility */

// Performance API
export const { performance } =
  typeof window === 'undefined'
    ? require( 'perf_hooks' )
    : window
