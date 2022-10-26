import o from 'ospec'
import { changeValues, changeValuesAsync } from '../index.js'


const
  f = x => x * 2,
  fAsync = async x => f( x ),
  obj = { x: 1, y: 2 }


o.spec( 'changeValuesAsync', () => {
  o( 'works', async () => {
    o( await changeValuesAsync( obj, fAsync ))
      .deepEquals( await changeValues( obj, f ))
  })
})
