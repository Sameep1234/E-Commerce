const pool = require('../../pool');

exports.pendingTransaction = (req, res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `CALL pendingTransaction()`;
            pool.query(fetch, (err,result) => {
                if(err){
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else{
                    console.log("cursor result ",result);
                    res.send({
                        status: 1,
                        msg: 'Pending Transaction List',
                        data: result,
                    });
                }
            })
        }
    })
}
