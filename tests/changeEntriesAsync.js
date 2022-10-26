import o from 'ospec'
import { changeEntries, changeEntriesAsync } from '../index.js'


const
  f = x => x * 2,
  fAsync = async x => f( x ),
  obj = { x: 1, y: 2 }


o.spec( 'changeEntriesAsync', () => {
  o( 'works', async () => {
    o( await changeEntriesAsync(
      obj,
      async e => [ e[0], await fAsync( e[1])]
    )).deepEquals( changeEntries(
      obj,
      e => [ e[0], f( e[1])]
    ))
  })
})
