import o from 'ospec'
import { get } from '../src'


const obj = { a: { b: { c: 1 }}}


o.spec( 'get', function() {
  o( 'retrieves nested object', function() {
    o( get( obj, 'a' )).deepEquals( obj.a )
  })

  o( 'retrieves nested value', function() {
    o( get( obj, 'a.b.c' )).equals( 1 )
  })

  o( 'undefined value', function() {
    o( get( obj, 'a.b.c.d' )).equals( undefined )
  })

  o( 'error on accessing property of undefined', function() {
    o(() => get( obj, 'a.b.c.d.e' ))
      .throws( "Cannot read properties of undefined (reading 'e')" )
  })
})
