import { createSlice } from "@reduxjs/toolkit";

type Thread = {
  _id: string;
  parentId: string | null;
  text: string;
  author: { name: string; image: string; username: string; id: string };
  community: { name: string; image: string; id: string };
  createdAt: string;
  children: { author: { image: string } }[];
  comments: string[];
  likes: string[];
};

const initialState = {
  threads: [] as Thread[],
  loading: false,
  error: null as string | null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    fetchThreadsRedux: (state, action) => {
      state.threads = action.payload;
    },
  },
});

export const { fetchThreadsRedux } = globalSlice.actions;

export const selectThreads = (state: any) => state.global.threads;

export default globalSlice.reducer;
