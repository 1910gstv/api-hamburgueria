const Pedido = require("../models/Pedidos");

async function getAllOrders(req,res){
    try {
        const allOrders = await Pedido.findAll();
        return res.status(200).json(allOrders);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function getOrderById(req,res){
    const { id } = req.params;

    try {
        const order = await Pedido.findOne({
            where: {
                id: Number(id),
            }
        })
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function createOrder(req,res){
    const newOrder = req.body;

    try {
        const newOrderCreated = await Pedido.create(newOrder);
        return res.status(200).json(newOrderCreated);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}

async function updateOrder(req,res){
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Pedido.update(newInfo, {
            where: {
                id: Number(id),
            },
        });

        const updatedOrder = await Pedido.findOne({
            where: {
                id: Number(id),
            },
        });
        return res.status(200).json(updatedOrder)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteOrder(req,res){
    const { id } = req.params;

    try {
        await Pedido.destroy({
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
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}