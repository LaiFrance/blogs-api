const { Category } = require('../database/models');

const categoryControllersPost = async (req, res) => {
    const { name } = req.body;

    const category = await Category.create({ name });

    return res.status(201).json(category);
};
module.exports = { categoryControllersPost };
