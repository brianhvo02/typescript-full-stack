import { configureStore } from '@reduxjs/toolkit';
import ConfigReducer from './config';
import { api } from './api';

export const store = configureStore({
    reducer: {
        config: ConfigReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;