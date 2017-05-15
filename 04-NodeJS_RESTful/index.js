'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product.js');

const app = express();
const port = process.env.PORT || 1337

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!products) return res.status(404).send({message: 'producto no existe'});
        res.status(200).send({products});
    })
    
});

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!product) return res.status(404).send({message: 'producto no existe'});
        res.status(200).send({product});
    });
});

app.post('/api/product', (req, res) => {
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
});

app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    let obj = req.body;

    Product.findByIdAndUpdate(productId, obj, (err, productUdated) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        res.status(200).send({product: productUdated});
    })
});

app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
        if (!product) return res.status(404).send({message: 'producto no existe'});
        product.remove(err => {
            if (err) return res.status(500).send({message: `error en la peticion: ${err}`});
            res.status(200).send({mesagge: 'producto ha sido eliminado'});
        });

    });
});

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err){
        return console.log('Conexion a la BD no se pudo realizar...');
    }
    console.log('Conexion a la BD establecida...');

    app.listen(port, () => {
        console.log(`API REST Corriendo en http://localhost:${port}`);
    });
});

