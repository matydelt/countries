import { getAll, getActivities, getById, postAct } from "../../functions/api"
export const COUNTRIES = 'GET_COUNTRIES';
export const ACTIVITIES = 'GET_ACTIVITIES';
export const COUNTRY = "GET_COUNTRY";
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
export const getCountry = (id) => {
    return async function (dispatch) {
        const country = await getById(id)
        dispatch({
            type: COUNTRY,
            payload: country
        })
    }

}
export const postActivity = ({ countries, name, station, duration, difficulty }) => {
    let activity = { name: name, station: station, duration: duration, difficulty: difficulty, countryId: countries }
    return async function (dispatch) {
        if (countries && name && station && duration && difficulty) {
            dispatch(postAct(activity))
        }
        else {
            alert("faltaron parametros")
        }
    }

}





