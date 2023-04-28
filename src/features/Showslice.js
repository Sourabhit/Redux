import {createSlice} from '@reduxjs/toolkit';

export const Showslice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
    increaseQuantity(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].quantity = state[myindex].quantity + 1;
      }
    },
    decreaseQuantity(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].quantity = state[myindex].quantity - 1;
      }
    },
  },
});

export const {addMyProducts, increaseQuantity, decreaseQuantity} =
  Showslice.actions;
export default Showslice.reducer;
