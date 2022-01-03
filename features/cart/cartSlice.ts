import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getItems } from '../../utills/utills';

// Define a type for the slice state
interface CartState {
  items: any[];
  status: 'idle' | 'loading' | 'failed';
  checkoutModal: boolean;
}
const initialState: CartState = {
  items: [],
  status: 'idle',
  checkoutModal: false,
};
export const onGetItems = createAsyncThunk('cart/onGetItems', async () => {
  return await getItems();
});
// Define the initial state using that type
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onChangeModal: (state) => {
      state.checkoutModal = !state.checkoutModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onGetItems.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(onGetItems.fulfilled, (state, action) => {
      state.status = 'idle';
      state.items = action.payload;
    });
  },
});

export const { onChangeModal } = cartSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.cart.items;
export const checkoutModal = (state: RootState) => state.cart.checkoutModal;

export default cartSlice.reducer;
