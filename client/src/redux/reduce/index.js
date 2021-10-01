import { COUNTRIES, ADDACTIVITY, COUNTRYDETAIL } from "../actions"
const initialState = {
    countriesLoaded: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTRIES:
            return {
                countriesLoaded: action.payload
            }
        case ADDACTIVITY:
            return {
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        case COUNTRYDETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer