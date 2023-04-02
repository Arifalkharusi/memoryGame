import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    data: [],
    checker: [],
  },
  reducers: {
    initilizer: (state, action) => {
      action.payload.forEach(
        (x) =>
          (state.data = [
            ...state.data,
            {
              item: x,
              rotation: 0,
              flipped: false,
            },
          ])
      );
    },
    checkCard: (state, action) => {
      if (state.checker.length < 2) {
        if (!state.data[action.payload.index].flipped) {
          state.checker = [...state.checker, action.payload.item];
          state.data[action.payload.index].rotation = 180;
          state.data[action.payload.index].flipped = true;
        }
      }
    },
    updateBorad: (state, action) => {
      if (state.checker.length === 2) {
        if (state.checker[0] !== state.checker[1]) {
          state.data.forEach((x) => {
            if (x.item === state.checker[0] || x.item === state.checker[1]) {
              x.rotation = 0;
              x.flipped = false;
            }
          });
        }
        state.checker = [];
      }
    },
  },
});
export const { initilizer, checkCard, updateBorad } = cardSlice.actions;

export default cardSlice.reducer;
