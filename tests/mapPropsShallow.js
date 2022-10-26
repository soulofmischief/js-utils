import o from 'ospec'
import { mapPropsShallow } from '../index.js'


const
  obj = { a: 1, b: 2 },
  f = x => x


o.spec( 'mapPropsShallow', () => {
  o( 'works', () => {
    o( mapPropsShallow( obj, f )).deepEquals( obj )
  })
})
