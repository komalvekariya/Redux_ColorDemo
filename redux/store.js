import { createStore } from 'redux'
import rootReducer from './reducer'

const reducer = (state, action) => {
    return rootReducer(state, action)
}

export default store = createStore(reducer)
