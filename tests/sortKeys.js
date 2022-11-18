import o from 'ospec'
import { sortKeys } from '../index.js'


const
  sorted = { a: 1, b: 2, c: 3, d: 4 },
  unsorted = { b: 2, a: 1, d: 4, c: 3 },
  _unsorted = { ...unsorted }


o.spec( 'sortKeys', () => {
  o( 'original object is unchanged', () => {
    sortKeys( unsorted )
    o( Object.keys( unsorted ))
      .deepEquals( Object.keys( _unsorted ))
  })

  o( 'sorted object is unchanged', async () => {
    o( Object.keys( sortKeys( sorted )))
      .deepEquals( Object.keys( sorted ))
  })

  o( 'unsorted object is sorted', () => {
    o( Object.keys( sortKeys ( unsorted )))
      .deepEquals( Object.keys( sorted ))
  })
})
