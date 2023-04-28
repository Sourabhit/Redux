import {createSlice} from '@reduxjs/toolkit';

export const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          brand: action.payload.brand,
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity + 1,
        });
      } else {
        state[myindex].quantity = state[myindex].quantity + 1;
      }
    },
    removeMyCartItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].quantity = state[myindex].quantity - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (state = state.filter(item => item.id !== action.payload));
    },
  },
});
export const {addProductToMyCart, removeMyCartItem, deleteMyCartItem} =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
