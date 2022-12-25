import { createSlice } from '@reduxjs/toolkit';

export const state = {
  contacts: [],
  filter: '',
};

export const addContact = createSlice({
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
