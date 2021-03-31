const pool = require('../../pool');

exports.successfulTransaction = () => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT * FROM transaction WHERE transactionStatus = "successful";';
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
                        msg: 'Successful Transaction List',
                        data: result,
                    });
                }
            })
        }
    })
}
