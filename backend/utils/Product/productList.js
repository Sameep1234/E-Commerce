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
            let fetch = 'SELECT p.productName, c.categoryID, s.subCategoryName, b.brandName, p.price, p.quantity FROM product p LEFT JOIN category c ON c.categoryID = p.categoryId LEFT JOIN brand b ON b.brandID = p.brandId LEFT JOIN subCategory s ON s.subCategoryID = p.subCategoryId;';
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
                        msg: 'Fetched Products',
                        data: result,
                    });
                }
            });
        }
    });
}