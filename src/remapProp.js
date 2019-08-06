// @flow strict
import { clone } from './clone'


export function remapProp(
  obj: Object,
  oldProperty: string,
  newProperty: string,
  {
    del = true // Delete old property.
  }: {
    del: boolean
  } = {}
) {

  // Clone object.
  const clone = clone( obj )

  // Remap property.
  clone[ newProperty ] = clone[ oldProperty ]

  // Options
  if ( del ) delete clone[ oldProperty ]

  return clone
}
