import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    searchKey : "",
    category : "",
    sort: "",
    range: [],
}

const searchFilter = createSlice({
    name: "searchFilter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchKey = action.payload;
        },
        filter: (state, action) => {
            state.category = action.payload;
        },
        sort: (state, action) => {
            state.sort = action.payload;
        }, 
        range: (state, action) => {
            state.range = action.payload;
        }
    }
});
export const {search, filter, sort, range} = searchFilter.actions;
export default searchFilter.reducer;