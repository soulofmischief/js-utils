
/**
 * @typedef {(string|Symbol)} PropertyKey
 */

/**
 * Callback for changing a key or value of an object.
 * @callback changeCallback
 * @param {PropertyKey} key The key of the field.
 * @param {*} value The current value of the field.
 * @returns {*} The new value of the field.
 */

/**
 * Callback for changing an entry of an object.
 * @callback changeEntryCallback
 * @param {Array< PropertyKey, * >} key The entry.
 * @param {number} index The index of the entry.
 * @returns {Array} The new value of the field.
 */
