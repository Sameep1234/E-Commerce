const express = require('express');
const router = express.Router();
const productList = require('./utils/productList')
const employeeList = require('./utils/employeeList');
const buyerList = require('./utils/buyerList');
const getBuyer = require('./utils/getBuyer');
const sellerList = require('./utils/sellerList');
const getEmployee = require('./utils/getEmployee');
const addBuyer = require('./utils/addBuyer');
const getProductCategory = require('./utils/getProdCategory');
const getProductSubCategory = require('./utils/getProdSubCategory');
const getProductBrand = require('./utils/getProdBrand');
const shippingList = require('./utils/shippingList')
const getShippingDetail = require('./utils/getShippingDetail');
const pendingShipping = require('./utils/pendingShipping');
const successfulShipping = require('./utils/successfulShipping');

router.get('/', (req, res) => {res.send('Server Running')});

//EMPLOYEE API's
router.get('/employeeList', employeeList.employeeList);
router.get('/getEmployee', getEmployee.getEmployee);

//PRODUCT API's
router.get('/productlist', productList.productList);
router.get('/getProductCategory', getProductCategory);
router.get('/getProductSubCategory', getProductSubCategory);
router.get('/getProductBrand', getProductBrand);

//BUYER API's
router.get('/buyerList', buyerList.buyerList);
router.get('/getBuyer', getBuyer.getBuyer);
router.post('/addBuyer', addBuyer.addBuyer);

//SELLER API's
router.get('/sellerList', sellerList.sellerList);

//SHIPPING API'S
router.get('/shippingList', shippingList.shippingList);
router.get('/getShippingDetail', getShippingDetail.getShippingDetail);
router.get('/successfulShipping', successfulShipping.successfulShipping);
router.get('/pendingShipping', pendingShipping.pendingShipping);

module.exports = router;