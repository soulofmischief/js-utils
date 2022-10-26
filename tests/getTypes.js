import o from 'ospec'
import { getTypes } from '../index.js'


const
  obj = {
    a: 1,
    b: '2',
    c: [],
    d: {},
    e: () => true,
    f: undefined,
  },

  types = {
    a: 'number',
    b: 'string',
    c: 'object',
    d: 'object',
    e: 'function',
    f: 'undefined',
  }

o( 'getHeaders', () => {
  o( getTypes( obj, 'x' )).deepEquals( types )
})
