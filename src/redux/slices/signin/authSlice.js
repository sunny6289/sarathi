import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async (data) => {
  console.log(data);
  const res = await fetch(
    "api call to create user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if(res.ok){
    return await res.json();
  }
});

export const loginUser = createAsyncThunk("loginUser", async (data) => {
  const res = await fetch(
    "api call to login user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if(res.ok){
    return await res.json();
  }
});

export const getUser = createAsyncThunk("getUser", async (data) => {
  const res = await fetch(
    "api call to get user data",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    });
  if(res.ok){
    return await res.json();
  }
});

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("isLoggedIn") || false, //persisting the login state in local storage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  //reducers are used to handle the synchronous actions (anything that updates the state synchronously)
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  //extraReducers are used to handle the async actions (api calls)
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setUser, setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
