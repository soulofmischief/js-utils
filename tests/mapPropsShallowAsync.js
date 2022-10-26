import o from 'ospec'
import { mapPropsShallow, mapPropsShallowAsync } from '../index.js'


const
  obj = { x: 1, y: 2 },
  f = x => x + 1,
  fAsync = async x => f( x )


o.spec( 'mapPropsShallowAsync', () => {
  o( 'works', async function() {
    o( await mapPropsShallowAsync( obj, key => fAsync( key )))
      .deepEquals( mapPropsShallow( obj, key => f( key )))
  })
})
