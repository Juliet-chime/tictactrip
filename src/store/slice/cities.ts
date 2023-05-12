import { createSlice } from '@reduxjs/toolkit';

interface CitiesType {
    local_name?: String;
    unique_name?: String;
}

type popularCitiesProps = {
    isAuthenticated?: boolean;
    popularCities?: CitiesType[];
}

const initialState: popularCitiesProps = {
    popularCities: [],
    isAuthenticated: false
}

export const createUserSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addPopularCiites: (state, action) => {
            state.isAuthenticated = true
            state.popularCities = action.payload
        },
        logOut: (state) => {
            state.isAuthenticated = false
        }
    }
})

export const { addPopularCiites, logOut } = createUserSlice.actions

export default createUserSlice.reducer