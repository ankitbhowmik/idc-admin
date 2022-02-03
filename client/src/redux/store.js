import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './menu/menu.reducer';

const middlewares = [thunk]

const rootReducer = combineReducers({
    menu: menuReducer
})

export function configureStore(){
    const store = createStore(rootReducer, applyMiddleware(...middlewares))

    return store;
}