import o from 'ospec'
import { returnTrue } from '../src'


o( 'returns true', function() {
  o( returnTrue()).equals( true )
})
