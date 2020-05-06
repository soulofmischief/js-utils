import o from 'ospec'
import { changeKeys } from '../src'


const
  // Modifier function.
  f = x => `${x}${x}`,
  // Construct an object.
  obj1 = { a: 1, b: 2 },
  // Manually apply f() to each key.
  obj2 = {
    [ f( Object.keys( obj1 )[0])]: obj1.a,
    [ f( Object.keys( obj1 )[1])]: obj1.b,
  }


o.spec( 'changeKeys', function() {
  o( 'works', function() {
    o( changeKeys( obj1, k => f( k ))).deepEquals( obj2 )
  })
})
