import o from 'ospec'
import { isTruthyOrZero } from '../index.js'


o.spec( 'isTruthyOrZero', function() {
  o( 'true on truthy', function() {
    o( isTruthyOrZero( true )).equals( true )
  })

  o( 'true on zero', function() {
    o( isTruthyOrZero( 0 )).equals( true )
  })

  o( 'false on falsy', function() {
    o( isTruthyOrZero( false )).equals( false )
  })

  o( 'true on nonzero positive', function() {
    o( isTruthyOrZero( 1 )).equals( true )
  })

  o( 'true on nonzero negative', function() {
    o( isTruthyOrZero( -1 )).equals( true )
  })
})
