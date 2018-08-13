import {increment, decrement, reset} from './actions/counter'
import store from 'store'

console.log('debug 0: ', store.getState())

let unsubscribe = store.subscribe(() => {
  console.log('debug 1: ', store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubscribe()
