import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiUsers from '../../config/Endpoints/users';

// get token from localstorage
const localAuth: any = localStorage.getItem("auth");

// First, create the thunk
export const fetchAllUsers = createAsyncThunk(
    "categories/fetchAllusers",
    async () => {
        const {token} = JSON.parse(localAuth);
        // console.log('localAuth', token)
        const config = {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        const res = await ApiUsers.getAllUsers(config);

        return res.data;
    }
);

// Define a type for the slice state
type UserSliceType = {
    data: [],
    isLoading : boolean
};

const initialState: UserSliceType = {
    data : [],
    isLoading : false
}

export const UserSlice = createSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        USER_ALL: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.data = [];
            state.isLoading = true
        });
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false
        });
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isLoading = false
        });
    }
});

export const { USER_ALL } = UserSlice.actions;

export default UserSlice.reducer;