const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

const userModel = sequelize.define('users',
    {
        name: { type: DataTypes.STRING },
        lastname: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING }
    },
    {
        timestamps: true
    }
);

module.exports = { userModel };