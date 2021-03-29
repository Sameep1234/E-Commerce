const pool = require(pool);

exports.shippingList = () => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT shippingId, dispatchDate, arrivalDate, shippingStatus FROM shipping;';
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
                        msg: 'Shipping List',
                        data: result,
                    });
                }
            })
        }
    })
}
