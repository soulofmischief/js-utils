import o from 'ospec'
import { zip } from '../src'


const
  obj = { x: 1, y: 2 },
  keys = Object.keys( obj ),
  vals = Object.values( obj )


o.spec( 'zip', function() {
  o( 'works', function() {
    o( zip( keys, vals )).deepEquals( obj )
  })
})
