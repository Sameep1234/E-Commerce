const pool = require('../../pool');

exports.getTotalPrice = (req, res) => {
    let  p_productId  = req.header.p_productId ;
    let  p_quantity = req.header.p_quantity;
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `call getTotalPrice(`+p_productId+`,`+  p_quantity +`);`;
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
                        msg: 'Brandwise Product List',
                        data: result,
                    });
                }
            })
        }
    })
}
