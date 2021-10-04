import { getById, getAll } from "../../functions/api"
export const COUNTRIES = 'GET_COUNTRIES';
export const ADDACTIVITY = 'ADD_ACTIVITY';
export const COUNTRYDETAIL = 'GET_COUNTRY';
export const getCountries = () => {
    return async function (dispatch, getState) {
        var result = await getAll()
        // result = pagination(result);
        result = result.data
        dispatch({
            type: COUNTRIES,
            payload: result
        })
    }

}
export function addActivity(payload) {
    return { type: ADDACTIVITY, payload };
}
export function getCountryDetails(id) {
    return function (dispatch) {
        getById(id)
            .then(json => {

                dispatch({
                    type: COUNTRYDETAIL,
                    payload: json
                })
            })
    }
}
export function removeMovieFavorite(idMovie) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: idMovie,
    }
}