const pool = require('../pool');

exports.updateStock = (req,res) => {

    let productId = req.body.productId;
    let stock = req.body.stock;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "UPDATE product SET stock = "+stock+ " WHERE productId = '" + {productId} +"';";
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
                        msg: 'Updated stock',
                        data: result,
                    });
                }
            })
        }
    }))
}