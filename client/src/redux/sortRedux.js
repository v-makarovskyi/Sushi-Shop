import { createSlice } from "@reduxjs/toolkit";

const sortClice = createSlice({
    name: 'sort',
    initialState: {
        sortBy: {
            type: 'newest',
            name: 'Сначала новые'
        }
    },
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    }
})

export const { setSortBy } = sortClice.actions

export default sortClice.reducer