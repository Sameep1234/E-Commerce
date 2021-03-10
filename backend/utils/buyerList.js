const pool = require("../pool");

exports.buyerList = (req,res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT * FROM buyer';
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
                        msg: 'Buyer List',
                        data: result,
                    });
                }
            })
        }
    })
}