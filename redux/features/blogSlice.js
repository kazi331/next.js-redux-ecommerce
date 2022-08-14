import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBlog = createAsyncThunk('blogs/getBlog', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).catch(err => console.log(err))
});
export const getPost = createAsyncThunk('blogs/getPost', async (pid) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`).then(res => res.json()).catch(err => console.log(err))
})
const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        loading: false
    },
    reducers: {
        singleItem: (state, action) => {
            const itemId = action.payload;
            state.post = state.blogs.filter(blog => blog.id === itemId);
        }
    }
    ,
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
        },
        
        [getPost.pending]: (state) => {
            state.loading = true;
        },
        [getPost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.loading = false
        },
        [getPost.rejected]: (state) => {
            state.loading = false
        }
    }

});
export default blogSlice.reducer