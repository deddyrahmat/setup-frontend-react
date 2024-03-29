import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
type authSliceType = {
  token: string | null;
};

const localAuth: any = localStorage.getItem("auth");
const initialState: authSliceType = localAuth
  ? JSON.parse(localAuth)
  : { token: null };

export const UserSlice = createSlice({
  name: "userAuth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    USER_LOGIN: (state, action) => {
      state.token = action.payload;
    },
    USER_LOGOUT: (state) => {
      state.token = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { USER_LOGIN, USER_LOGOUT } = UserSlice.actions;

export default UserSlice.reducer;
