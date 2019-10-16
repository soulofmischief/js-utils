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
  const c = clone( obj )

  // Remap property.
  c[ newProperty ] = c[ oldProperty ]

  // Options
  if ( del ) delete c[ oldProperty ]

  return c
}
