const { Country } = require("../db.js");
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

module.exports = {
    getAll_Query,
    getById
}