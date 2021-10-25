const { TouristActivity, Activities, Country } = require("../db.js");
const { Op } = require("sequelize")
const axios = require('axios');
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    if (originalArray) {
        for (var i in originalArray) {
            lookupObject[originalArray[i].dataValues[prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i].dataValues);
        }
        return newArray;
    }

}
async function getActivities(id) {
    if (id) {
        let act = await Activities.findAll({ where: { countryId: { [Op.iLike]: `%${id}%` } } })
        if (act.length > 0)
            return act// devuelve arreglo de actividades(link activity to country) buscado por countryId        
    } else {
        let act = await Activities.findAll({})
        if (act)
            return act
        return null
    }
}
async function getAct(id) {
    let activity;
    activity = await TouristActivity.findOne({ where: { id: id }, attributes: ["id", "name", "difficulty", "duration", "station"] })
    if (activity) {
        return activity.dataValues
    }
}
async function addToDb(res) {
    axios.get('https://restcountries.com/v3/all')
        .then(async function (response) {
            const data = response.data;
            if (response) {
                for (let i = 0; i < response.data.length; i++) {
                    if (data[i]["capital"] && data[i].hasOwnProperty("capital")) {
                        let countr = Country.build({
                            name: data[i].name.common,
                            id: data[i].cca3,
                            nationalFlag: data[i].flags.find(e => e.includes('png')),
                            continent: data[i].region,
                            capital: data[i].capital[0],
                            subRegion: data[i].subregion,
                            area: data[i]["area"]
                        })
                        await countr.save();
                    }
                }
                const countries = await Country.findAll({
                    where: {}, attributes: ["id", "name", "capital", "continent",
                        "nationalFlag", "subRegion", "area"]
                });
                return res.send(countries)
            }
            res.status(500).send("No se pudo cargar en la base de datos")
        })
}
module.exports = {
    addToDb,
    removeDuplicates,
    getActivities,
    getAct
}
