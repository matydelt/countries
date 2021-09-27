
'use strict';
const { DataTypes } = require('sequelize');
const touristActivity = require('./touristActivity');
const Country = require("./Country")
module.exports = (sequelize) => {
    const Activities = sequelize.define("Activities", {
        countryId: {
            type: DataTypes.STRING(3),
            references: {
                model: "Country",
                key: "id"
            }
        },
        touristActivityId: {
            type: DataTypes.INTEGER,
            references: {
                model: "TouristActivity",
                key: "id"
            }
        }
    });
}