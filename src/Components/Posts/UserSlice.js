import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  users: [],
};

export const fetchUsers = createAsyncThunk("thunk/users", async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "Pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "Fullfilled";
      state.users = state.users.concat(action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "Rejected";
      state.error = action.error.message;
    });
  },
});

export const allStatus = (state) => state.users.status;
export const allerror = (state) => state.users.error;
export const allUsers = (state) => state.users.users;

export default UserSlice.reducer;
