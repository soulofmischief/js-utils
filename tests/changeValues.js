import o from 'ospec'
import { changeValues } from '../index.js'


const
  f = ( x ) => x * 2,
  obj1 = { a: 1, b: 2 },
  obj2 = { a: f( obj1.a ), b: f( obj1.b )}


o.spec( 'changeValues', function() {
  o( 'works', function() {
    o( changeValues( obj1, v => f( v ))).deepEquals( obj2 )
  })
})
