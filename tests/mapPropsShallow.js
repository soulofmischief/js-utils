import o from 'ospec'
import { mapPropsShallow } from '../src'


const
  obj = { x: 1, y: 2 },
  f = ( x ) => x


o.spec( 'mapPropsShallow', function() {
  o( 'works', function() {
    o( mapPropsShallow( obj, key => f( key ))).deepEquals( obj )
  })
})
