import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
  price: 0,
  count: 0,
  collection: {}
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    reset: () => getInitialState(),
    add: (state, action) => {
      const { id, text, price } = action.payload;
      const { collection } = state;
      state.price += price;
      state.count += 1;
      if (id in collection) {
        collection[id].price += price;
        collection[id].count += 1;
        return state;
      }
      collection[id] = {
        text,
        price,
        count: 1
      };
      return state;
    },
    remove: (state, action) => {
      const { id, price } = action.payload;
      const { collection } = state;
      if (id in collection) {
        if (collection[id].count <= 1) delete collection[id];
        else {
          collection[id].count -= 1;
          collection[id].price -= price;
        }
        state.count -= 1;
        return state;
      }
      return state;
    }
  }
});

export const { reset, add, remove } = cartSlice.actions;

export default cartSlice.reducer;
