const express = require('express');
const router = express.Router();
const productList = require('./utils/productList')
const employeeList = require('./utils/employeeList');
const buyerList = require('./utils/buyerList');
const getBuyer = require('./utils/getBuyer');
const sellerList = require('./utils/sellerList');
const getEmployee = require('./utils/getEmployee');
const addBuyer = require('./utils/addBuyer');

router.get('/', (req, res) => {res.send('Server Running')});

//EMPLOYEE API's
router.get('/employeeList', employeeList.employeeList);
router.get('/getEmployee', getEmployee.getEmployee);

//PRODUCT API's
router.get('/productlist', productList.productList);

//BUYER API's
router.get('/buyerList', buyerList.buyerList);
router.get('/getBuyer', getBuyer.getBuyer);
router.post('/addBuyer', addBuyer.addBuyer);

//SELLER API's
router.get('/sellerList', sellerList.sellerList);

module.exports = router;