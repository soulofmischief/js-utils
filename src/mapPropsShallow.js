// @flow strict


export function mapPropsShallow( o: Object, cb: () => * ) {
  //return { ...Object.keys( o ).map( k => ({[k]: cb( o[k])}))}
  return Object.assign(
    ...Object
      .entries( o )
      .map(([ k, v ]) => ({[ k ]: cb( v )}))
  )
}
