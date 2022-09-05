const { BlogPost, Category, User } = require('../database/models');

const getAllblogPost = async (req, res) => {
  const posts = await BlogPost.findAll({ include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
        attributes: {
          exclude: 'PostCategory',
        },
      },
    ],
  });

  return res.status(200).json(posts);
};

module.exports = getAllblogPost;