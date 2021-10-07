import { getAll } from "./api";
import { COUNTRIES } from "../redux/actions";
export function filterOrderName(countries, flag) { // ordenador por nombre
    if (flag) {
        countries.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    } else {
        countries.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
}
export function filterOrderArea(countries, flag) {   // ordenador por area
    if (flag) {
        countries.sort(function (a, b) {
            if (a.area < b.area) {
                return 1;
            }
            if (a.area > b.area) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    } else {
        countries.sort(function (a, b) {
            if (a.area > b.area) {
                return 1;
            }
            if (a.area < b.area) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }

}
export async function filterByCOA(countries, filter) {//filtro por continente o actividad
    if (filter !== null) {
        if (countries.length > 220) {
            let result = [];
            result = await countries.filter((e) => e.continent === filter);
            return result;
        }
        else {
            let result = [];
            result = await getAll();
            return result.data.filter((e) => e.continent === filter);
        }
    } else {
        let result = [];
        console.log("asd")
        result = await getAll();
        return result.data;
    }
}


export async function filterByAct(filter, countriesLoaded, activities, dispatch) {
    if (filter !== "filtrar por Actividad turistica") {
        let activity = activities.find(e => e.id === parseInt(filter))
        let countriesId = activity.countries.map(e => e.id)
        let countries = [];
        for (let i = 0; i < countriesId.length; i++) {
            let aux = await countriesLoaded.find(e => e.id === countriesId[i])
            if (aux) {
                countries.push(aux)
            }
        }

        if (countries.length > 0) {
            dispatch({
                type: COUNTRIES,
                payload: countries
            })
        }
        else {
            alert("no encontramos paises con esas indicaciones")
        }
    } else {
        let result = [];
        result = await getAll();
        dispatch({
            type: COUNTRIES,
            payload: result.data
        })
    }
}
