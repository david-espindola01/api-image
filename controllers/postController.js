const fetch = require('node-fetch');
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

exports.listPosts = async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();
    res.render('index', { posts });
  } catch (err) {
    res.status(500).send('Error al obtener los posts');
  }
};

exports.getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const post = await response.json();
    res.render('post', { post });
  } catch (err) {
    res.status(500).send('Error al obtener el post');
  }
};
