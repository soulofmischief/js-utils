import o from 'ospec'
import { createEnum } from '../index.js'


o.spec( 'createEnum', () => {
  o( 'creates an enum', () => {
    const
      e = createEnum( 'hello', 'world' ),

      stringEnum = {
        hello: 'Symbol(hello)',
        world: 'Symbol(world)',
      },

      derivedStringEnum = Object.fromEntries(
        Object
          .entries( e )
          .map(([ k, v ]) => [ k, v.toString() ])
      )

    o( stringEnum ).deepEquals( derivedStringEnum )
  })
})
