import {configureStore} from '@reduxjs/toolkit';
import addMyProducts from '../Showslice';
import MyCartslice from '../MyCartslice';

import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

let persistConfig = {
  key: 'root',
  storage,
};

let rootReducer = combineReducers({
  product: addMyProducts,
  cart: MyCartslice,
});

let persistReducer1 = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducer1,
});
export default store;
