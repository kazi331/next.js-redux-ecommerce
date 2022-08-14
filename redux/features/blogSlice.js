import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBlog = createAsyncThunk('blogs/getBlog', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).catch(err => console.log(err))
});

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        loading: false
    },
    extraReducers: {
        [getBlog.pending]: (state) => {
            state.loading = true;
        },
        [getBlog.fulfilled]: (state, action) => {
            state.blogs = action.payload;
            state.loading = false
        },
        [getBlog.rejected]: (state) => {
            state.loading = false
        }
    }

});
export default blogSlice.reducer