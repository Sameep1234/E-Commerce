const express = require('express');
const router = express.Router();
const productList = require('./utils/productList')

router.get('/', (req, res) => {res.send('Server Running')});

router.get('/product-list', productList.productList);

module.exports = router;