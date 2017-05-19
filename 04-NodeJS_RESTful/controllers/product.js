'use strict';

const Product = require('../models/product.js');

function getProduct (req, res){
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!product) return res.status(404).send({message: 'producto no existe'});
        res.status(200).send({product});
    });
}

function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!products) return res.status(404).send({message: 'producto no existe'});
        res.status(200).send({products});
    });
}

function saveProduct(req, res) {
    console.log('POST /api/product');
    console.log(req.body);

    var product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    console.log(product);

    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({mesagge: 'error al salvar en la BD'});
        }
        res.status(200).send({product: productStored});
    });
}

function updateProduct (req, res) {
    let productId = req.params.productId;
    let obj = req.body;

    Product.findByIdAndUpdate(productId, obj, (err, productUdated) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        res.status(200).send({product: productUdated});
    })
}

function deleteProduct (req, res) {    
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!product) return res.status(404).send({message: 'producto no existe'});
        product.remove(err => {
            if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
            res.status(200).send({mesagge: 'producto ha sido eliminado'});
        });
    });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}