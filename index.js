const express = require('express');
const path = require('path');
const postController = require('./controllers/postController');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', postController.listPosts);
app.get('/post/:id', postController.getPostById);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
