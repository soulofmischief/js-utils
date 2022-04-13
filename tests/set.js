import o from 'ospec'
import { get, set } from '../src'


let obj = {}


o.spec( 'set', () => {
  o.beforeEach(() => obj = { a: { b: { c: 1 }}})

  o( 'sets 1 deep', () => {
    const
      path = 'a',
      val = 'test'

    set( obj, path, val )
    o( get( obj, path )).deepEquals( val )
  })

  o( 'sets 2 deep', () => {
    const
      path = 'a.b',
      val = 'test'

    set( obj, path, val )
    o( get( obj, path )).deepEquals( val )
  })
})
