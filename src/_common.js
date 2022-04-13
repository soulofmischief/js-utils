// @flow strict

/* Node.JS compatibility */

// Performance API
export const { performance } =
  typeof window === 'object'
    ? window
    : eval( 'require("perf_hooks")' )
