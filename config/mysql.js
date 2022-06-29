const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        host: process.env.MYSQL_HOST,
        port: '3306',
        dialect: "mysql",
        define: {
            timestamps: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
);

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        sequelize.sync();
        console.log('*** DB Conected ***');
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sequelize, dbConnect };