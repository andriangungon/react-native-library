import { Action, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { ThunkAction } from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const persistor = persistStore(store)
