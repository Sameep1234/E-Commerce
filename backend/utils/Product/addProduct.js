const pool = require('../../pool');
const fs = require('fs');

exports.addProduct = (req, res) => {
    let productId = req.body.productId;
    let productName = req.body.productName;
    let categoryId = req.body.categoryId;
    let subCategoryId = req.body.subCategoryId;
    let brandId = req.body.brandId;
    let specificationId = req.body.specificationId;
    let color = req.body.color;
    let price = req.body.price;
    let quantity = req.body.stock;
    let size = req.body.size;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO product VALUES('" + productId + "','" + productName + "','" + categoryId + "','" + subCategoryId + "','" + brandId + "','" + specificationId + "','" + color + "','" + price + "','" + quantity + "','" + size + "');";
            pool.query(fetch, (err, result) => {
                if (err) {
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else {
                    let temp = fetch + '\n';
                    fs.appendFile('Query.txt', temp, err => {
                        if (err) console.log(err);
                    });
                    res.send({
                        status: 1,
                        msg: 'Added product',
                        data: result,
                    });
                }
            })
        }
    }))
}