import o from 'ospec'
import { has } from '../index.js'


const obj = { x: 1, y: 2 }


o.spec( 'regular', function() {
  o( 'has key', function() {
    o( has( obj, 'x' )).equals( true )
  })

  o( 'missing key', function() {
    o( has( obj, 'z' )).equals( false )
  })
})
