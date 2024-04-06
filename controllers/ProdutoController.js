const Produto = require("../models/Produtos");

async function getAllProducts(req,res){
    try {
        const allProducts = await Produto.findAll();
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

async function getProductPerId(req,res){
    const { id } = req.params;

    try {
        const product = await Produto.findOne({
            where: {
                id: Number(id)
            },
        });
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

async function createProduct(req,res){
    const newProduct = req.body;

    try {
        const newProductCreated = await Produto.create(newProduct);
        return res.status(200).json(newProductCreated);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}

async function updateProduct(req,res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Produto.update(newInfo, {
            where: {
                id: Number(id),
            },
        });

        const updatedProduct = await Produto.findOne({
            where: {
                id: Number(id),
            },
        });

        return res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteProduct(req,res){
    const { id } = req.params;

    try {
        await Produto.destroy({
            where: {
                id: Number(id)
            },
        });
        return res.status(200).json({mensagem: `O produto id=${id} foi deletado!`})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProductPerId,
    createProduct,
    updateProduct,
    deleteProduct
}