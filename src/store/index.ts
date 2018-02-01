import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducer/index';
import { RootState } from './rootState';
import logger from 'redux-logger';
// import { createEpicMiddleware } from 'redux-observable';

const composeEnhancers = compose;

function configureStore(initialState?: RootState) {
    // configure middlewares
    const middlewares = [
        // createEpicMiddleware(rootEpic),
        logger
    ];
    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );
    // create store
    return createStore(
        rootReducer,
        initialState!,
        enhancer
    );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;