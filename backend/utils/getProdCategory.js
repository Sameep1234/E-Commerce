const pool = require('../pool');

exports.getProductCategory = (req,res) => {

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
            let fetch = "SELECT c.category_name FROM category c LEFT JOIN product ON c.categoryId = p.caregoryId WHERE p.productId = '" + {prodId} +"';";
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
                        msg: 'Product Category',
                        data: result,
                    });
                }
            })
        }
    }))
}