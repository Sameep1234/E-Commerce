const pool = require('../pool')

exports.getBuyer = ((req,res) => {
    let buyerId = req.headers.buyerId;

    pool.getConnection((err) => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "SELECT * FROM buyer WHERE buyerId = '" + buyerId + "';";
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
                        msg: 'Buyer Details',
                        data: result,
                    });
                }
            })
        }
    })
})