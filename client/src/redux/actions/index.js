import { getAll, getActivities } from "../../functions/api"
export const COUNTRIES = 'GET_COUNTRIES';
export const ACTIVITIES = 'GET_ACTIVITIES';
export const COUNTRYID = "SET_COUNTRYID"
// export const COUNTRYDETAIL = 'GET_COUNTRY';
export const getCountries = () => {
    return async function (dispatch) {
        var result = await getAll()
        var act = await getActivities()
        result = result.data
        dispatch({
            type: COUNTRIES,
            payload: result
        })
        dispatch({
            type: ACTIVITIES,
            payload: act.data
        })
    }
}





