import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiRole from "../../config/Endpoints/role";

// First, create the thunk
export const fetchAllRoles = createAsyncThunk(
  "roles/fetchAllRoles",
  async (_arg, { getState }) => {
    const state: any = getState();
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state.auth.token}`,
      },
    };
    const res = await ApiRole.getAllRole(config);

    return res.data;
  }
);

// Define a type for the slice state
type roleSliceType = {
  data: [];
  isLoading: boolean;
};

const initialState: roleSliceType = {
  data: [],
  isLoading: false,
};

export const RoleSlice = createSlice({
  name: "role",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ROLE_ALL: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRoles.pending, (state) => {
      state.data = [];
      state.isLoading = true;
    });
    builder.addCase(fetchAllRoles.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllRoles.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { ROLE_ALL } = RoleSlice.actions;

export default RoleSlice.reducer;
