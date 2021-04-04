const pool = require('../../pool');
const fs = require('fs');

exports.addCategory = (req, res) => {
    let categoryId = req.body.categoryId;
    let categoryName = req.body.categoryName;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO category VALUES('" + categoryId + "','" + categoryName + "');";
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
                        msg: 'Added Category',
                        data: result,
                    });
                }
            })
        }
    }))
}