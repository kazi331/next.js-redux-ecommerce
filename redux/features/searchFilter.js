import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    searchKey : "",
    category : "",
}

const searchFilter = createSlice({
    name: "searchFilter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchKey = action.payload;
        }
    }
});
export const {search} = searchFilter.actions;
export default searchFilter.reducer;