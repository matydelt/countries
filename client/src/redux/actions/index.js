import { getById, getAll } from "../../functions/api"
import { filterOrderArea, filterOrderName } from "../../functions/filters";
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
export const setOrderCountriesByName = (flag) => {
    return async function (dispatch, getState) {
        let countries = await getAll()
        filterOrderName(countries.data, flag)
        countries = countries.data
        dispatch({
            type: COUNTRIES,
            payload: countries
        })
    }
}
export const setOrderCountriesByArea = (flag) => {
    return async function (dispatch, getState) {
        let countries = await getAll()
        filterOrderArea(countries.data, flag)
        countries = countries.data
        dispatch({
            type: COUNTRIES,
            payload: countries
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