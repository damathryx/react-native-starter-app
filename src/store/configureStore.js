import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from './Reducer';

let middleware = [thunk];

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
