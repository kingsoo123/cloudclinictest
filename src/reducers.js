import { createSlice } from "@reduxjs/toolkit";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions/userActions";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    fetchUsersReducer: (state, action) => {
      console.log(action, "REDUCER");
      switch (action.payload.type) {
        case FETCH_USERS_SUCCESS:
          return {
            ...state,
            users: action?.payload?.payload,
          };

        default:
          return state;
      }
    },
  },
});

export const { fetchUsersReducer } = userSlice.actions;
export default userSlice.reducer;
