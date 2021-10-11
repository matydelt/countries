import { COUNTRIES, ACTIVITIES, COUNTRY } from "../actions"
const initialState = {
    countriesLoaded: [],
    activitiesLoaded: [],
    country: ""
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTRIES:
            return {
                ...state,
                countriesLoaded: action.payload
            }
        case ACTIVITIES:
            return {
                ...state,
                activitiesLoaded: action.payload
            }
        case COUNTRY:
            return {
                ...state,
                country: action.payload
            }

        default:
            return { ...state }
    }
}

export default rootReducer