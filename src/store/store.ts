import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { movieApi } from 'store/api/api'
import filterSlice from 'store/slice/filterSlice'

import themeSlice from './slice/themeSlice'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['theme'], // only persist the theme reducer
}

const persistedThemeReducer = persistReducer(persistConfig, themeSlice.reducer)

const rootReducer = combineReducers({
	filters: filterSlice.reducer,
	theme: persistedThemeReducer,
	[movieApi.reducerPath]: movieApi.reducer,
})

export const store = configureStore({
	reducer: {
		filters: filterSlice.reducer,
		theme: persistedThemeReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}).concat(movieApi.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}).concat(movieApi.middleware),
	})
}

export type AppStore = ReturnType<typeof setupStore>
