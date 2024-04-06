const Usuario = require('../models/Usuarios');

async function getAllUsers(req,res){
    try {
        const allUsers = await Usuario.findAll();
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function getUserPerId(req,res){
    const { id } = req.params;

    try {
        const user = await Usuario.findOne({
            where: {
                id:Number(id)
            },
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error.message);   
    }
}

async function createUser(req,res){
    const newUser = req.body;

    try {
        const newUserCreated = await Usuario.crete(newUser);
        return res.status(200).json(newUserCreated);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}

async function updateUser(req,res){
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Usuario.update(newInfo, {
            where: {
                id: Number(id),
            },
        });

        const updatedUser = await Usuario.findOne({
            where: {
                id: Number(id),
            },
        });

        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteUser(req,res){
    const { id } = req.params;

    try {
        await Usuario.destroy({
            where: {
                id: Number(id),
            },
        });

        return res.status(200).json({mensagem: `A categoria id=${id} foi deletada!`})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



module.exports = {
    getAllUsers,
    getUserPerId,
    createUser,
    updateUser,
    deleteUser
}