const axios = require("axios")

export function getAll() {
    const res = axios.get(`http://localhost:3001/countries`)  // llamo a mi api y le pido todos los paises
    return res



}
export function getById(id) {
    return (
        axios.get(`http://localhost:3001/countries/${id}`) // llamo a mi api y le pido el pais con id

    )
}
// export function allCountries(setCountries) {
//     axios.get(`http://localhost:3001/countries`) // llamo a mi api y le pido todos los paises
//         .then((recurso) => {
//             if (recurso) {
//                 for (let i = 0; i < recurso.length; i++) {
//                     const Country = {
//                         img: recurso.flag,
//                         name: recurso.name,
//                         id: recurso.id,
//                         area: recurso.area,
//                         population: recurso.population
//                     };
//                     setCountries(oldCities => [...oldCities, Country]);
//                 }
//             }
//         });
// }

