import o from 'ospec'
import { mapPropsShallow } from '../src'


const
  obj = { a: 1, b: 2 },
  f = x => x


o.spec( 'mapPropsShallow', () => {
  o( 'works', function() {
    o( mapPropsShallow( obj, f )).deepEquals( obj )
  })
})
