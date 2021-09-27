const { Country, TouristActivity, Activities } = require("../db.js");
const { Op } = require("sequelize")


async function getAll_Query(name, res) {
    if (name) {
        const country = await Country.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
        if (country.length > 0)
            return res.json(country)
        res.status(404).send("no se encontraron paises")
    }
    else {
        const countries = await Country.findAll({});
        if (countries)
            return res.json(countries)
        res.sendStatus(500)
    }
}
async function getById(id, res) {
    const country = await Country.findOne({ where: { id: id.toUpperCase() } });
    if (country)
        return res.json(country)
    res.status(404).send("no se encontro dicho pais")
}
async function getActAll_Query(name, res) {
    console.log(name.toString())
    if (name) {
        let activity = await TouristActivity.findAll({ where: { name: name.toLowerCase() } })
        if (activity.length > 0)
            return res.json(activity)
        else {
            activity = await TouristActivity.findByPk(name)
            if (activity) {
                activity = { name: activity.name, difficulty: activity.difficulty, duration: activity.duration, station: activity.station }
                return res.json(activity)
            }
            res.status(404).send("no se encontro la actividad")
        }
        res.status(404).send("no se encontro la actividad")
    }
    else {
        const activities = await TouristActivity.findAll({});
        if (activities)
            return res.json(activities)
        res.sendStatus(500)
    }
}
async function getActivities(id, res) {
    if (id) {
        let act = await Activities.findAll({ where: { countryId: { [Op.iLike]: `%${id}%` } } })
        if (act.length > 0)
            return res.json(act)// devuelve arreglo de actividades(link activity to country) buscado por countryId
        else {
            console.log(id)
            act = await Activities.findAll({ where: { touristActivityId: id } })
            if (act.length > 0)
                return res.json(act)// devuelve arreglo de actividades(link activity to country) buscado por activityId
            return res.sendStatus(404);
        }
    } else {
        let act = await Activities.findAll({})
        if (act)
            return res.json(act)
        return res.sendStatus(404);
    }
}

module.exports = {
    getAll_Query,
    getById,
    getActAll_Query,
    getActivities
}