// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: JSON.parse(localStorage.getItem('formData')) || {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('formData', JSON.stringify(state.data));
    },
    resetFormData: (state) => {
      state.data = {};
      localStorage.removeItem('formData');
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
