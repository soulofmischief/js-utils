// @flow strict


/** If value is falsy, return empty string. Otherwise, return value. */
export function clearFalsyValue( value: * ): * {
  return value ? value : ''
}
