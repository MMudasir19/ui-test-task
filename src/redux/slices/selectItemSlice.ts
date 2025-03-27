// selectItemSlice.ts (redux slice)

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectItemState {
  items: string[];
  isOpen: boolean;
}

const initialState: SelectItemState = {
  items: [],
  isOpen: false,
};

const selectItemSlice = createSlice({
  name: "selectItem",
  initialState,
  reducers: {
    updateItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { updateItems, setIsOpen } = selectItemSlice.actions;

export default selectItemSlice.reducer;
