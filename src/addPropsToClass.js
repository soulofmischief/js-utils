// @flow strict
import type { FunctionMap } from 'Flow'


/**
 * Add properties to a class.
 * Use inside the class definition itself.
 * @param {Object} hooks Dictionary of hooks to be added
 * @param {this} context The 'this' value of the class
 * @param {Object} options
 * @param {Boolean} options.overwrite Flag for overwriting hooks
 */
export function addPropsToClass (
  context: *,
  hooks: FunctionMap,
  options: {
    overwrite: boolean
  } = {
    overwrite: false
  }) {
  // Loop through the hooks object
  Object.entries( hooks ).forEach( x => {
    // If there is no preexisting hook,
    // or if overwrite is enabled, add hook
    if ( !context[ x[0] ] || options.overwrite ) {
      /* $FlowFixMe bind */
      context[ x[0] ] = x[1].bind( context )
    }
  })
}
