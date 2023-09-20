import { createSlice } from "@reduxjs/toolkit";
import { sendMail } from "./mailApiSlice";

// Create Slice.
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mail: "",
    message: null,
    error: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendMail.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        (state.mail = action.payload.data),
          (state.message = action.payload.message);
      });
  },
});

// Export Actions.
export const { setMessageEmpty } = mailSlice.actions;

// Export Reducer.
export default mailSlice.reducer;
