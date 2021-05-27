import { createAction, createReducer } from '@reduxjs/toolkit';

export const addToBasket = createAction('products/addToBasket');
export const removeFromBasket = createAction('products/removeFromBasket');

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToBasket, (state, action) => {
      const { price, id } = action.payload;
      state.push({ price, id });
    })
    .addCase(removeFromBasket, (state, action) => {
      const { payload } = action;
      const currentIndex = state.findIndex(({ id }) => {
        return id !== payload;
      });

      state.splice(currentIndex, 1);
    });
});

export default reducer;
