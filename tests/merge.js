import o from 'ospec'
import { merge } from '../index.js'


const
  o1 = { a: { a: 1 }},
  o2 = { a: { b: 2 }},
  o3 = { a: { a: 1, b: 2 }}

o.spec( 'merge', function () {
  o( 'Objects are equivalent', () => {
    o( merge( o1, o2 ))
      .deepEquals( o3 )
  })

  o( "Doesn't mutate", () => {
    o( merge( o1, o2 ))
      .notDeepEquals( o1 )
  })
})
