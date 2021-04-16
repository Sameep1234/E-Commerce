const pool = require("../../pool");

exports.orderList = (req,res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT o.*, concat(b.firstName, " ", b.middleName, " ", b.lastName) as "name" FROM orders o LEFT JOIN buyer b ON b.buyerId = o.buyerId';
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
                        msg: 'Order List',
                        data: result,
                    });
                }
            })
        }
    })
}