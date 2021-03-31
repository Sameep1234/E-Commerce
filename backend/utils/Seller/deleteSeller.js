const pool = require('../../pool');

exports.deleteSeller = (req,res) => {
    let sellerId = req.header.sellerId;

    pool.createConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "DELETE FROM seller WHERE sellerId = "+ {sellerId} +";";
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
                        msg: 'Deleted Seller',
                        data: result,
                    });
                }
            })
        }
    }))
}