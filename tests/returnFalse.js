import o from 'ospec'
import { returnFalse } from '../index.js'


o( 'returns false', function() {
  o( returnFalse()).equals( false )
})
