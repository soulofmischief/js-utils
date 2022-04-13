// @flow strict


/** If check is falsy, return empty string. Otherwise, return result. */
export function clearFalsyValueDeferred( check: *, result: * ): * {
  return check ? result : ''
}
