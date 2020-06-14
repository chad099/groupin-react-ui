import { combineReducers } from 'redux';
import app from './modules/app';
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
    form: formReducer,
    app
});