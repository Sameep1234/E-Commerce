const pool = require('pool');

exports.getShippingDetail = (req,res) => {

    let shippingId = req.header.shippingId;

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
            let fetch = "SELECT * FROM shipping WHERE shippingId = '" + {shippingId} +"';";
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
                        msg: 'Shipping Detail',
                        data: result,
                    });
                }
            })
        }
    }))
}