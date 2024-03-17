import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //condition for not taking to much msg when doding api polling, so what w do , we just remove the msgs rom the top
      if (state.messages.length) {
        state.messages.splice(LIVE_CHAT_COUNT, 1);
      }
      state.messages.push(action.payload);
      //we use push because we have tosend our chat from bottom to top and our msg which we send r4tshould be shown first.
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
