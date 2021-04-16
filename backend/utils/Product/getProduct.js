const pool = require('../../pool');

exports.getProduct = ((req,res) => {
    let productId = req.headers.productid;

    pool.getConnection((err) => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "SELECT * FROM product WHERE productId = '" + productId + "';";
            pool.query(fetch, (err, result) => {
                if(err){
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else{
                    res.send({
                        status: 1,
                        msg: 'Product Detail',
                        data: result[0],
                    });
                }
            })
        }
    })
})