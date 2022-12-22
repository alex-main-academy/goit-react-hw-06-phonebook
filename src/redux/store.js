import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const state = {
  contacts: [],
  filter: '',
};

const addContact = createSlice({
  name: 'addContact',
  initialState: state,
  reducers: {
    addUser(state, action) {
      state.contacts.push(action.payload);
    },
    deleteUser(state, action) {
      state.contacts = [
        ...state.contacts.filter(item => item.id !== action.payload),
      ];
    },
    filterArray(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, addContact.reducer);

export const { addUser, deleteUser, filterArray } = addContact.actions;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
