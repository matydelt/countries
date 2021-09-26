const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const TouristActivity = sequelize.define('touristActivity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        station: {
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: false
        }
    });

}