const pool = require('../../pool');
const fs = require('fs');

exports.addSubCategory = (req, res) => {
    let subCategoryId = req.body.subCategoryId;
    let subCategoryName = req.body.subCategoryName;
    let categoryId = req.body.categoryId;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO subCategory VALUES('" + subCategoryId + "','" + subCategoryName + "','" + categoryId + "');";
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
                        msg: 'Added Sub Category',
                        data: result,
                    });
                }
            })
        }
    }))
}