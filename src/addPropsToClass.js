
/**
 * Add properties to a class.
 * Use inside the class definition itself.
 * @param {this} context The 'this' value of the class
 * @param {Object} hooks Dictionary of hooks to be added
 * @param {Object} options
 * @param {Boolean} options.overwrite Flag for overwriting hooks
 */
export function addPropsToClass (
  context,
  hooks,
  options = { overwrite: false }
) {
  // Loop through the hooks object
  Object.entries( hooks ).forEach( x => {
    // If there is no preexisting hook,
    // or if overwrite is enabled, add hook
    if ( !context[ x[0]] || options.overwrite ) {
      /* $FlowFixMe bind */
      context[ x[0]] = x[1].bind( context )
    }
  })
}
