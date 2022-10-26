// @flow strict


export function nullifyFalsyValueDeferred( check, result ) {
  return check ? result : null
}
