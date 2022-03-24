import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import gridReducer from '../features/Grid/reducer'

let rootReducers = combineReducers({
  grid: gridReducer,
  // nama reducer diatas adalah grid
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))) // <--- buat store memanfaatkan fungsi createStore
export default store // <--- export store yang sudah dibuat
