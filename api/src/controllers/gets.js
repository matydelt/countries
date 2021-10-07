const { Country, TouristActivity, Activities } = require("../db.js");
const { Op } = require("sequelize")
const func = require("./functions");



async function getAll_Query(name, res) {
    if (name) {
        const country = await Country.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } }, attributes: ["id", "name", "capital", "continent",
                "nationalFlag", "subRegion", "area"],
        });
        if (country.length > 0)
            return res.json(country)
        res.status(404).send("no se encontraron paises")
    }
    else {
        const countries = await Country.findAll({
            where: {}, attributes: ["id", "name", "capital", "continent",
                "nationalFlag", "subRegion", "area"], include: TouristActivity
        });
        if (countries[0]) {
            return res.json(countries)
        }
        return func.addToDb(res);
    }
}
async function getById(id, res) {
    let activitiesId = await func.getActivities(id, res)
    activitiesId = func.removeDuplicates(activitiesId, "touristActivityId")
    let activities = [];
    let country = await Country.findOne({
        where: { id: id.toUpperCase() }, attributes: ["id", "name", "capital", "continent",
            "nationalFlag", "subRegion", "area"]
    })
    if (country && activitiesId) {
        country = country.dataValues
        for (let i = 0; i < activitiesId.length; i++) {
            activities.push(func.getAct(activitiesId[i].touristActivityId))
        }
        await Promise.all(activities).then((res) => {
            country = {
                ...country, activities: res
            }

        })
        return res.json(country)
    } else if (country) {
        return res.json(country)
    }
    return res.status(404).send("no se encontro dicho pais")
}
async function getActivities(res) {
    let act = await TouristActivity.findAll({ where: {}, attributes: ["id", "name", "difficulty", "duration", "station"], include: Country })
    if (act)
        return res.json(act)
    return res.sendStatus(404)

}


module.exports = {
    getAll_Query,
    getById,
    getActivities
}