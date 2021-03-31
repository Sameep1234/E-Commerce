const pool = require('../../pool');

exports.getProductPriceLimit = (req,res) => {

    let prodId = req.header.prodId;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "SELECT * FROM product p WHERE p.productId = '" + {prodId} +"';";
            pool.query(fetch, (err,result) => {
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
                        msg: 'Brand Name',
                        data: result,
                    });
                }
            })
        }
    }))
}