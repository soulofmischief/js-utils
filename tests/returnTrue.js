import o from 'ospec'
import { returnTrue } from '../index.js'


o( 'returns true', function() {
  o( returnTrue()).equals( true )
})
