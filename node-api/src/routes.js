const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
routes.get('/product', ProductController.index );
routes.post('/product',ProductController.store);
routes.get('/product/:id',ProductController.show);
routes.put('/product/:id',ProductController.update);
routes.delete('/product/:id',ProductController.destroy);

module.exports = routes;