import { combineReducers } from 'redux'
import createUserSlice from './slice/cities'

const combinedReducer = combineReducers({
    popularCities: createUserSlice,
})


export const rootReducer = (state: any, action: any) => {
    if (action.type === 'cities/logOut') {
        localStorage.clear()
        state = undefined;
    }
    return combinedReducer(state, action);
};