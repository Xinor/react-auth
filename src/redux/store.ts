import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = { key: 'root', storage, whitelist: ['token'] };
const persistedReducer = persistReducer<IState, any>(persistConfig, rootReducer);

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any; }
}

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
