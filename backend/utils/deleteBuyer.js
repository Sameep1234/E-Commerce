const pool = require('../pool'); 

exports.deleteBuyer = (req,res) => {
    let buyerId = req.header.buyerId;

    pool.createConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "DELETE FROM buyer WHERE buyerId = "+ {buyerId} +";";
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
                        msg: 'Deleted Buyer',
                        data: result,
                    });
                }
            })
        }
    }))
}