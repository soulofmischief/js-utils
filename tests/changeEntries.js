import o from 'ospec'
import { changeEntries } from '../src'


const
  f = x => x * 2,
  obj1 = { x: 1, y: 2 },
  obj2 = { x: f( obj1.x ), y: f( obj1.y )}


o.spec( 'changeEntries', function() {
  o( 'works', function() {
    o( changeEntries( obj1, e => [ e[0], f( e[1])])).deepEquals( obj2 )
  })
})
