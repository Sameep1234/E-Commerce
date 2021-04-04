const pool = require('../../pool');
const fs = require('fs');

exports.addSpecification = (req, res) => {
    let specificationId = req.body.specificationId;
    let categoryId = req.body.categoryId;
    let subCategoryId = req.body.subCategoryId;
    let brandId = req.body.brandId;
    let model = req.body.model;
    let productDescription = req.body.productDescription;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO specification VALUES('" + specificationId + "','" + categoryId + "','" + subCategoryId + "','" + brandId + "','" + model + "','" + productDescription + "');";
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
                        msg: 'Added Specification',
                        data: result,
                    });
                }
            })
        }
    }))
}