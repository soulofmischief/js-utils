import o from 'ospec'
import { prependToProps } from '../src'


const
  obj = { a: 1, b: '2', c: {}, d: null, e: undefined },
  str = 'test',
  res = {
    a: `${str}${obj.a}`,
    b: `${str}${obj.b}`,
    c: `${str}${obj.c}`,
    d: `${str}${obj.d}`,
    e: `${str}${obj.e}`
  }


o.spec( 'prependToProps', function() {
  o( 'works', function() {
    o( prependToProps( obj, 'test' )).deepEquals( res )
  })
})
