const pool = require('../../pool');

exports.deleteProduct = (req,res) => {
    let productId = req.headers.productid;
    console.log(productId);

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "DELETE FROM product WHERE productId = '"+ productId +"';";
            pool.query(fetch, (err,result) => {
                if(err){
                   res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                    console.log(err);
                }
                else{
                    res.send({
                        status: 1,
                        msg: 'Deleted Product',
                        data: result,
                    });
                }
            })
        }
    }))
}