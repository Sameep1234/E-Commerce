const express = require('express');
var router = express.Router();

//EMPLOYEE ROUTES
const employeeList = require('./utils/Employee/employeeList');
const getEmployee = require('./utils/Employee/getEmployee');
const addEmployee = require('./utils/Employee/addEmployee');
const updateEmployee = require('./utils/Employee/updateEmployee');
const deleteEmployee = require('./utils/Employee/deleteEmployee');

//PRODUCT ROUTES
const productList = require('./utils/Product/productList');
const getProductCategory = require('./utils/Product/getProdCategory');
const getProductSubCategory = require('./utils/Product/getProdSubCategory');
const getProductBrand = require('./utils/Product/getProdBrand');
const updateProduct = require('./utils/Product/updateProduct');
const deleteProduct = require('./utils/Product/deleteProduct');
const addProduct = require('./utils/Product/addProduct');
const getProduct = require('./utils/Product/getProduct');

//CATEGORY ROUTES
const addCategory = require('./utils/Category/addCategory');
const categoryList = require('./utils/Category/categoryList');

//BUYER ROUTES
const buyerList = require('./utils/Buyer/buyerList');
const getBuyer = require('./utils/Buyer/getBuyer');
const addBuyer = require('./utils/Buyer/addBuyer');
const updateBuyer = require('./utils/Buyer/updateBuyer');
const deleteBuyer = require('./utils/Buyer/deleteBuyer');

//SHIPPING ROUTES
const shippingList = require('./utils/Shipping/shippingList');
const getShippingDetail = require('./utils/Shipping/getShippingDetail');
const pendingShipping = require('./utils/Shipping/pendingShipping');
const successfulShipping = require('./utils/Shipping/successfulShipping');

//TRANSACTION ROUTES
const transactionList = require('./utils/Transaction/transactionList')
const getTransaction = require('./utils/Transaction/getTransaction');
const pendingTransaction = require('./utils/Transaction/pendingTransaction');
const successfulTransaction = require('./utils/Transaction/successfulTransaction');

//CART ROUTES
const cartList = require('./utils/Cart/cartList');
// const getCartDetail = require('./utils/getCartDetail');

//SELLER ROUTES
const sellerList = require('./utils/Seller/sellerList');
const getSeller = require('./utils/Seller/getSeller');
const addSeller = require('./utils/Seller/addSeller');
const deleteSeller = require('./utils/Seller/deleteSeller');
const updateSeller = require('./utils/Seller/updateSeller');

//STOCK ROUTES
const stockList = require('./utils/Stock/stockList');
const updateStock = require('./utils/Stock/updateStock');

//ORDER ROUTES
const orderList = require('./utils/Order/orderList');
const getOrder = require('./utils/Order/getOrder');
const addOrder = require('./utils/Order/addOrder');

//BRAND ROUTES
const brandList = require('./utils/Brand/brandList');
const addBrand = require('./utils/Brand/addBrand');

//SPECIFICATION ROUTES
const addSpecification = require('./utils/Specification/addSpecification');

//SUBCATEGORY ROUTES
const addSubCategory = require('./utils/SubCategory/addSubCategory');
const subCategoryList = require('./utils/SubCategory/subCategoryList');

router.get('/', (req, res) => {res.send('Server Running')});

//__________________________________________________________________________

//SPECIFICATION APIs
router.post('/addSpecification', addSpecification.addSpecification);

//EMPLOYEE APIs
router.get('/employeeList', employeeList.employeeList);
router.get('/getEmployee', getEmployee.getEmployee);
router.post('/addEmployee', addEmployee.addEmployee);
router.post('/updateEmployee', updateEmployee.updateEmployee);
router.post('/deleteEmployee', deleteEmployee.deleteEmployee);

//PRODUCT APIs
router.get('/productList', productList.productList);
router.get('/getProductCategory', getProductCategory.getProductCategory);
router.get('/getProductSubCategory', getProductSubCategory.getProductSubCategory);
router.get('/getProductBrand', getProductBrand.getProductBrand);
router.post('/updateProduct', updateProduct.updateProduct);
router.get('/deleteProduct', deleteProduct.deleteProduct);
router.post('/addProduct', addProduct.addProduct);
router.get('/getProduct', getProduct.getProduct);

//BUYER APIs
router.get('/buyerList', buyerList.buyerList);
router.get('/getBuyer', getBuyer.getBuyer);
router.post('/addBuyer', addBuyer.addBuyer);
router.post('/updateBuyer', updateBuyer.updateBuyer);
router.get('/deleteBuyer', deleteBuyer.deleteBuyer);

//SHIPPING APIs
router.get('/shippingList', shippingList.shippingList);
router.get('/getShippingDetail', getShippingDetail.getShippingDetail);
router.get('/successfulShipping', successfulShipping.successfulShipping);
router.get('/pendingShipping', pendingShipping.pendingShipping);

//TRANSACTION APIs
router.get('/transactionList', transactionList.transactionList);
router.get('/getTransaction', getTransaction.getTransaction);
router.get('/successfulTransaction', successfulTransaction.successfulTransaction);
router.get('/pendingTransaction', pendingTransaction.pendingTransaction);

//CART APIs
router.get('/cartList', cartList.cartList);
// router.get('/getCartDetail', getCartDetail.getCartDetail);

//SELLER APIs
router.get('/sellerList', sellerList.sellerList);
router.get('/getSeller', getSeller.getSeller);
router.post('/addSeller', addSeller.addSeller);
router.get('/deleteSeller', deleteSeller.deleteSeller);
router.post('/updateSeller', updateSeller.updateSeller);

//STOCK APIs
router.get('/stockList', stockList.stockList);
router.post('/updateStock', updateStock.updateStock);

//ORDER APIs
router.get('/orderList', orderList.orderList);
router.get('/getOrder', getOrder.getOrder);
router.post('/addOrder', addOrder.addOrder);

//BRAND APIs
router.get('/brandList', brandList.brandList);
router.post('/addBrand', addBrand.addBrand);

//CATEGORY APIs
router.post('/addCategory', addCategory.addCategory);
router.get('/categoryList', categoryList.categoryList);

//SUBCATEGORY APIs
router.post('/addSubCategory', addSubCategory.addSubCategory);
router.get('/subCategoryList', subCategoryList.subCategoryList);

module.exports = router;