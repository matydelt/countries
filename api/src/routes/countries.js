const { Router } = require('express');
const { Country } = require("../db.js");
const axios = require('axios');


const router = Router();
router.post("/countries", function (req, res) {
    axios.get("https://restcountries.com/v2/all")
        .then(async function (response) {
            const data = response.data;
            for (let i = 0; i < response.data.length; i++) {
                let countr = Country.build({
                    name: data[i].name, id: data[i].numericCode, nationalFlag: data[i].flags[0],
                    continent: data[i].continent, capital: data[i]["capital"],
                    subrRegion: data[i].region, area: data[i]["area"], population: data[i].population
                })
                await countr.save();

            }
            res.send("terminado")
        })
})

router.get("/countries", async (req, res) => {
    const countries = await Country.findAll({});
    if (countries)
        return res.json(countries)
    res.sendStatus(500)
})
router.get("/countries/:id", async (req, res) => {

    const country = await Country.findOne({ where: { id: req.params.id } });
    if (country)
        return res.json(country)
    res.sendStatus(404)
})
router.get("/countries?name", async (req, res) => {

    res.send("todavia no hago nada perro")
})

module.exports = router;

