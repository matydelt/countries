const axios = require("axios")

export function getAll() {
    const res = axios.get(`/countries`)  // llamo a mi api y le pido todos los paises
    return res
}
export function getActivities() {
    const res = axios.get(`/activities`)  // llamo a mi api y le pido todos los paises
    return res
}
export async function getById(id) {
    const country = await axios.get(`/countries/${id}`) // llamo a mi api y le pido el pais con id
    return country.data;
}
export async function postAct({ name, difficulty, duration, countries, station }) {
    let activity = { name: name, difficulty: difficulty, duration: duration, station: station, countryId: countries }
    await axios.post(`/activity`, activity)
    alert("actividad creada")
}

