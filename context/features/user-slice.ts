import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user_Id: string;
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
  threads: string[];
};

const initialState: UserState = {
  user_Id: "",
  userId: "",
  username: "",
  name: "",
  bio: "",
  image: "",
  path: "",
  threads: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserIdRedux: (state, action) => {
      state.user_Id = action.payload;
    },
    updateUserRedux: (state, action) => {
      state.user_Id = action.payload._id;
      state.userId = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.image = action.payload.image;
      state.threads = action.payload.threads;
    },
  },
});

export const { updateUserRedux, updateUserIdRedux } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
