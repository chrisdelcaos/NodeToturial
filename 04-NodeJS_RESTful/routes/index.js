'use strict';

const express = require('express');
const ProductCtrl = require('../controllers/product.js');
const api = express.Router();

api.get('/product', ProductCtrl.getProducts);
api.get('/product/:productId', ProductCtrl.getProduct);
api.post('/product', ProductCtrl.saveProduct);
api.put('/product/:productId', ProductCtrl.updateProduct);
api.delete('/product/:productId', ProductCtrl.deleteProduct);

module.exports = api;

