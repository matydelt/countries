const { Country } = require("../db.js");

const { TouristActivity } = require("../db")


async function addActivity(req, res) {
    const { name, difficulty, duration, station, countryId } = req.body
    try {
        const [touristActivity] = await TouristActivity.findOrCreate({ where: { name, difficulty, duration, station } });
        const id = countryId.toUpperCase()
        const country = await Country.findOne({ where: { id: id } });
        if (country)
            country.addTouristActivities(touristActivity)
        res.sendStatus(302)
    }
    catch (error) {
        res.status(500).send(error)
    }

}

module.exports = {

    addActivity
}