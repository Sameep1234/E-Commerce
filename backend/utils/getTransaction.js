const pool = require('pool');

exports.getTransaction = (req,res) => {

    let transactionId = req.header.transactionId;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            // we will need detail of orfder id too
            // note: we can give direct link to get order by id button there and redirect accordingly
            let fetch = "SELECT * FROM transaction WHERE transactionId = '" + {transactionId} +"';";
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
                        msg: 'Transaction Detail',
                        data: result,
                    });
                }
            })
        }
    }))
}