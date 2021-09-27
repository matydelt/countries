const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const Touristactivity = sequelize.define('touristActivity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM(["1", "2", "3", "4", "5"])
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        station: {
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
            allowNull: false
        }
    });

}