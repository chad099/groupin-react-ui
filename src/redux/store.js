/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(initialState={}) {
 let store =  createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk))
 );
 return store;
}