import { configureStore, legacy_createStore} from 'redux';

import { reducer } from './reducer';
import { applyMiddleware } from 'redux';

const loggerMiddleware = (store) => (next) => (action) => {
    if(typeof action === "function")
        return action(store.dispatch)
    next(action)
}

export const store = legacy_createStore(
    reducer,
    applyMiddleware(loggerMiddleware)
)