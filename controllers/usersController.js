const { userModel } = require('../models/userModel');

// TODO: Listar usuarios
const getUsers = async (req, res) => {
    const users = await userModel.findAll({})
    
    res.send({ users });
}

module.exports = {
    getUsers
}