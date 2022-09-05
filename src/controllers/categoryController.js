const { Category } = require('../database/models');

const categoryControllersPost = async (req, res) => {
    const { name } = req.body;

    const category = await Category.create({ name });

    return res.status(201).json(category);
};
const categoryControllersGet = async (req, res) => {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
};
module.exports = { categoryControllersPost, categoryControllersGet };
