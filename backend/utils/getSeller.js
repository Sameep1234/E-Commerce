const pool = require('../pool')

exports.getSeller = ((req,res) => {
    let sellerId = req.headers.sellerId;

    pool.getConnection((err) => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "SELECT * FROM seller WHERE sellerId = '" + sellerId + "';";
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
                        msg: 'Seller Detail',
                        data: result,
                    });
                }
            })
        }
    })
})