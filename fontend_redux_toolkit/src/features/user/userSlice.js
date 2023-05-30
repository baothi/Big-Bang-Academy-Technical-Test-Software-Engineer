import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  user: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const getUsers = createAsyncThunk(
  "auth/users",  
  async(thunkAPI)=>{
  try {
    return userService.getAllUsers()
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers:{},
  extraReducers: (buildeer)=>{
    buildeer
      .addCase(getUsers.pending,(state=>{
        state.isLoading=true
      }))
      .addCase(getUsers.fulfilled,(state,action)=>{
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.allusers = action.payload;
        state.message = "success";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
        state.isLoading = false;
      })
  },
})

export default authSlice.reducer;
