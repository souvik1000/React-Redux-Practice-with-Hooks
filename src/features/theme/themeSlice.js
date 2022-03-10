import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "theme",
  initialState: { color: "" },
  reducers: {
    textChangeByColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { textChangeByColor } = colorSlice.actions;

export default colorSlice.reducer;
