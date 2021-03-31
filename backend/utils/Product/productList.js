const pool = require('../../pool');

exports.productList = (req, res) => {
    pool.getConnection((err) => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        } else {
            let fetch = 'select p.productName, p.categoryID, p.subCategoryID, p.brandID, p.price from product p';
            pool.query(fetch, (err, result) => {
                if (err) {  
                    res.send({
                        status: 0,
                        msg: err.message,
                        data: null,
                    });
                } else {
                    res.send({
                        status: 1,
                        msg: 'Returned Products',
                        data: result,
                    });
                }
            });
        }
    });
}