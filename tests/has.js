import o from 'ospec'
import { has } from '../src'


const obj = { x: 1, y: 2 }


o.spec( 'has', function() {
  o( 'has key', function() {
    o( obj::has( 'x' )).equals( true )
  })

  o( 'missing key', function() {
    o( obj::has( 'z' )).equals( false )
  })
})
