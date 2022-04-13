import o from 'ospec'
import { returnFalse } from '../src'


o( 'returns false', function() {
  o( returnFalse()).equals( false )
})
