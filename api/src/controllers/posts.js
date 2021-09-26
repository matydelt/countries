const { Country } = require("../db.js");
const axios = require('axios');
const { TouristActivity } = require("../db")

async function addToDb(res) {
    axios.get("https://restcountries.com/v2/all")
        .then(async function (response) {
            const data = response.data;
            if (response) {
                for (let i = 0; i < response.data.length; i++) {
                    let countr = Country.build({
                        name: data[i].name, id: data[i].alpha3Code, nationalFlag: data[i].flags[0],
                        continent: data[i].continent, capital: data[i]["capital"],
                        subRegion: data[i].region, area: data[i]["area"], population: data[i].population
                    })
                    await countr.save();

                }
                return res.send("terminado")
            }
            res.status(500).send("No se pudo cargar en la base de datos")
        })
}
async function addActivity(req, res) {
    const { difficulty, duration, station, countryId } = req.body
    const name = req.body.name.ToLowerCase()
    const [touristActivity] = await TouristActivity.findOrCreate({ where: { name, difficulty, duration, station } });
    const id = countryId.toUpperCase()
    const country = await Country.findOne({ where: { id: id } });
    if (country)
        country.addTouristActivities(touristActivity)
    res.json(touristActivity)
}

module.exports = {
    addToDb,
    addActivity
}