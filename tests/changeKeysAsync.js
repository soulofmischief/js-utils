import o from 'ospec'
import { changeKeys, changeKeysAsync } from '../index.js'


const
  f = k => `${k}${k}`,
  fAsync = async k => f( k ),
  obj = { x: 1, y: 2 }


o.spec( 'changeKeysAsync', () => {
  o( 'works', async () => {
    o( await changeKeysAsync( obj, fAsync ))
      .deepEquals( await changeKeys( obj, f ))
  })
})
