import o from 'ospec'
import { configureStore } from '../index.js'


o.spec( 'createEventListeners', () => {
  o.spec( 'works with default parameters', () => {
    o( 'default store is a map', () => {
      o( configureStore().store instanceof Map ).equals( true )
    })

    o( 'store can be an array or map', () => {
      // Check Map.
      o( configureStore( new Map()).store instanceof Map ).equals( true )

      // Check array.
      o( Array.isArray( configureStore([]).store )).equals( true )

      // Any other type should throw an error.
      o(() => configureStore({})).throws( 'Store must be a Map or array.' )
    })

    // TODO: Needs Node 19's CustomEvent exposed by
    //  --experimental-global-customevent
    /*o( 'creates add listener', () => {
      // Create store.
      const { store, target } = configureStore()

      // Call add listener.
      target.dispatchEvent( new CustomEvent( 'add', { detail: 'foo' }))

      // Compare to array with 'test'.

      o( store ).deepEquals([ 'test' ])
    })*/
  })
})
