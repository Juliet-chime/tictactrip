import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducers'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)