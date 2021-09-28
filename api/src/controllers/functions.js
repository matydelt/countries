const { TouristActivity, Activities } = require("../db.js");
const { Op } = require("sequelize")
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
module.exports = {
    removeDuplicates,
    getActivities,
    getAct
}
