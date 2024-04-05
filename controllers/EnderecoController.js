const Endereco = require("../models/Enderecos");

async function getAllAdresses(req, res) {
    try {
        const allAdresses = await Endereco.findAll();
        return res.status(200).json(allAdresses);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function getAddressById(req,res) {
    const { id } = req.params;

    try {
        const address = await Endereco.findOne({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(address)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function createAddress(req,res) {
    const newAddress = req.body;

    try {
        const newAddressCreated = await Endereco.create(newAddress);
        return res.status(200).json(newAddressCreated);
    } catch {
        return res.status(500).json("Internal Server Error");
    }
}

async function updateAddress(req,res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Endereco.update(newInfo, {
            where: {
                id: Number(id)
            }
        });

        const updatedAddress = await Endereco.findOne({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(updatedAddress)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteAddress(req,res) {
    const { id } = req.params;

    try {
        await Endereco.destroy({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json({mensagem: `O endereço id=${id} foi deletada!`})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getAllAdresses,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress
}