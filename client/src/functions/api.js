const axios = require("axios")

export function getAll() {
    const res = axios.get(`http://localhost:3001/countries`)  // llamo a mi api y le pido todos los paises
    return res
}
export function getActivities() {
    const res = axios.get(`http://localhost:3001/activities`)  // llamo a mi api y le pido todos los paises
    return res
}
export function getById(id) {
    return (
        axios.get(`http://localhost:3001/countries/${id}`) // llamo a mi api y le pido el pais con id

    )
}
// export const pagination = (arr, nArr = []) => {
//     arr = arr.data;
//     let i = 0, flag = 0, max = 9;
//     let aux = [];
//     while (i < arr.length) {
//         aux = [];
//         for (var k = 0; k < max; k++) {
//             if (flag === 0) {
//                 aux.push(arr[i]);
//             }
//             else {
//                 aux.push(arr[i]);
//             }
//             i++;
//             if (i >= arr.length) break;
//         }
//         if (flag === 0 && k === max) {
//             max++
//             flag = 1
//         }
//         nArr.push(aux)
//     }
//     return nArr;
// }
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

