import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import chatReducer from "./../reducers/chatReducer.js";
import messageReducer from "./../reducers/messageReducer.js";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)