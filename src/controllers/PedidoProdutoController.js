const PedidoProduto = require('../models/PedidosProdutos');

async function getAllOrderProducts(req,res){
    try {
        const getAll = await PedidoProduto.findAll();
        return res.status(200).json(getAll)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function getOrderProductPerId(req,res){
    const { id } = req.params;

    try {
        const orderproduct = await PedidoProduto.findOne({
            where: {
                id:Number(id)
            },
        });
        return res.status(200).json(orderproduct);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function createOrderProduct(req,res){
    const newOrderProduct = req.body;

    try {
        const newOrderProductCreated = await PedidoProduto.create(newOrderProduct);
        return res.status(200).json(newOrderProductCreated)
    } catch (error) {
        return res.status(500).json("Internal Server Error"); 
    }
}

async function updateOrderProduct(req,res){
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await PedidoProduto.update(newInfo, {
            where: {
                id: Number(id),
            },
        });

        const updatedOrderProduct = await PedidoProduto.findOne({
            where: {
                id: Number(id),
            },
        });
        return res.status(200).json(updatedOrderProduct)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteOrderProduct(req,res){
    const { id } = req.params;

    try {
        await PedidoProduto.destroy({
            where: {
                id: Number(id),
            },
        })

        return res.status(200).json({mensagem: `O PedidoProduto id=${id} foi deletado!`})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getAllOrderProducts,
    getOrderProductPerId,
    createOrderProduct,
    updateOrderProduct,
    deleteOrderProduct
}