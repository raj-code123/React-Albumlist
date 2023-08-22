import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const dataAsync = createAsyncThunk("/dataAsync", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  console.log(data);
  return data;
});


const initialState = {
    data:[],
    // newUserId:"",
    // newAlbumTitle:"",
    loading: false,
    error: null,
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        // getData:(state,action) => {
        //     // state.data = action.payload;
        // },
        // getUserId:(state,action) => {
        //     state.newUserId = action.payload;
        // },
        // getAlbumTitle:(state,action) => {
        //     state.newAlbumTitle = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(dataAsync.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(dataAsync.fulfilled,(state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(dataAsync.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        });
      },
});

export const {
    getData,
    getUserId,
    getAlbumTitle
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;

export const mainSelector = (state) => state.mainReducers;