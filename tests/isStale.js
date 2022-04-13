import o from 'ospec'
import { isStale } from '../src'
import { performance } from '../src/_common'


o.spec( 'isStale', function () {
  o( 'yes', function () {
    o( isStale( performance.now() - 10, 1 ))
      .equals( true )
  })

  o( 'no', function () {
    o( isStale( performance.now() - 10, 15 ))
      .equals( false )
  })
})
