import { COUNTRIES, ACTIVITIES } from "../actions"
const initialState = {
    countriesLoaded: [],
    activitiesLoaded: [],
    countryId: ""

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

        // case COUNTRIESO:
        //     return {
        //         ...state,
        //         countriesOrdered: action.payload
        //     }


        default:
            return { ...state }
    }
}

export default rootReducer