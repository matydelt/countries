const { Router } = require('express');
const { Country } = require('../models/Country');
const { TouristActivity } = require("../models/touristActivity")


const router = Router();

router.post("/activity", async function (req, res) {
    const { name, dificulty, duration, station, countryId } = req.body
    const [touristActivity] = await TouristActivity.findOrCreate({ where: { name, dificulty, duration, station }, defaults: { name, dificulty, duration, station } });
    const country = await Country.findById(countryId);
    country.setTouristActivity(touristActivity)
    res.json(touristActivity)
})


module.exports = router;