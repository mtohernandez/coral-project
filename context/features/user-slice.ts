import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
};


const intialState: UserState = {
  userId: "",
  username: "",
  name: "",
  bio: "",
  image: "",
  path: "",
}; 
