import { createSlice } from "@reduxjs/toolkit";

const initialItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const updateLocalStorageReducer = (state, action) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: initialItems,
  },
  selectors: {
    selectCartTotal: state => state.items.reduce((total, item) => total + item.count, 0),
  },
  reducers: {
    addItem: (state, action) => {
      const foundItem = state.items.find(item => item.id == action.payload.id);
      if(foundItem) {
        foundItem.count++;
      } else {
        state.items.push({...action.payload, count: 1});
      }
    },
    updateItem: (state, action) => {
      state.items = action?.payload;
    },
    removeItem: (state, action) => {
      const id = action.payload?.id;
      const count = action.payload?.count - 1;

      let items = null;
      if (count === 0) {
        items = state.items.filter((obj) => obj.id !== id);
      } else {
        items = state.items.map((obj) => {
          if (obj.id === id) {
            return { ...obj, count: count };
          } else {
            return obj;
          }
        });
      }
      state.items = items;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher( action => action.type.startsWith('cart/'),  updateLocalStorageReducer)
  }
});

export const { selectCartTotal } = cartSlice.selectors;

export const { addItem  , removeItem, clearCart, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
