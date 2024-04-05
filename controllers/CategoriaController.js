const Categoria = require('../models/Categorias');

async function getAllCategories(req,res){
    try {
        const allCategories = await Categoria.findAll();
        return res.status(200).json(allCategories)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function getCategoryPerId(req,res){
    const { id } = req.params;

    try {
        const category = await Categoria.findOne({
            where: {
                id:Number(id)
            },
        });
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function createCategory(req,res){
    const newCategory = req.body;

    try {
        const newCategoryCreated = await Categoria.create(newCategory);
        return res.status(200).json(newCategoryCreated)
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}

async function updateCategory(req,res){
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Categoria.update(newInfo, {
            where: {
                id: Number(id),
            },
        });

        const updatedCategory = await Categoria.findOne({
            where: {
                id: Number(id),
            },
        });

        return res.status(200).json(updatedCategory)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteCategory(req,res){
    const { id } = req.params;

    try {
        await Categoria.destroy({
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
    getAllCategories,
    getCategoryPerId,
    createCategory,
    updateCategory,
    deleteCategory
}
